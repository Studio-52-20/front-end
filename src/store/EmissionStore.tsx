/*
	Authors:
	>> Clément Lacroix - { clacroix2@etu.uqac.cq }
	>> Lucas Aubriet - { laubriet@etu.uqac.cq }
	>> Martin Vidal - { mvidal@etu.uqac.cq }
	>> Nathan TIROLF - { ntirolf@etu.uqac.cq }
	>> Romane Lesueur - { rlesueur@etu.uqac.cq }

	(„• ֊ •„)❤    <    Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import type { IEmission } from "@/type/Emission";
import { fetchGet, getFullUrl } from "@/services/fetch";


/* ----- DATAS ----- */
let lastEmissionsFetch: number = 0;
const emissions: Map<string, { fetch: number; emission: IEmission }> = new Map();


/* ----- PRIVATE FUNCTION ----- */
function _formatJsonEmission(jsonResponse: any) {
	const tmp: IEmission = {
		id: jsonResponse["id"],
		title: jsonResponse["titre"],
		description: jsonResponse["description"],
		audio: getFullUrl(jsonResponse["audioUrl"]),
		date: new Date(jsonResponse["date"]),
		image: getFullUrl(jsonResponse["imageUrl"]) ?? "/img/default_img.jpg",
		participants: jsonResponse["participantsIds"],
		comments: jsonResponse["commentairesIds"],
		serie: jsonResponse["idSerie"],
	}
	emissions.set(tmp.id, { fetch: Date.now(), emission: tmp });
}


/* ----- FETCH ----- */
async function fetchEmissions() {
	try {
		const response = await fetchGet("emissions");
		const jsonResponse = await response.json();
		emissions.clear();
		lastEmissionsFetch = Date.now();
		for (let i = 0; i < jsonResponse.member.length; i++)
			_formatJsonEmission(jsonResponse.member[i]);
	} catch (error) {
		console.error("Error fetching emissions: ", error);
	}
}

async function fetchEmission(id: string) {
	try {
		const response = await fetchGet(`emissions/${id}`);
		const jsonResponse = await response.json();
		_formatJsonEmission(jsonResponse);
	} catch (error) {
		console.error("Error fetching emission: ", error);
	}
}

/* ----- GETTERS ----- */
export async function getEmissions() {
	if (emissions.size === 0 || Date.now() - lastEmissionsFetch > 1000 * 60 * 60 * 24) await fetchEmissions();
	const tmp: IEmission[] = [];
	emissions.forEach((value) => {
		tmp.push(value.emission);
	});
	return tmp;
}

export async function getEmissionById(id: string) {
	const emission = emissions.get(id);
	if (emission === undefined || Date.now() - emission.fetch > 1000 * 60 * 60 * 24) await fetchEmission(id);
	return emissions.get(id)?.emission;
}

export async function getQueryEmissions(query: string) {
	await getEmissions();
	const tmp: IEmission[] = [];
	emissions.forEach((value) => {
		if (value.emission.title.toLowerCase().includes(query.toLowerCase()))
			tmp.push(value.emission);
	});
	return tmp;
}

export async function getEmissionsByIds(ids: string[]) {
	const promises = ids.map(async (id) => {
		try {
			return await getEmissionById(id);
		} catch {
			return undefined;
		}
	});

	const results = await Promise.all(promises);
	return results.filter((c): c is IEmission => c !== undefined);
}


/* ----- FUNCTION ----- */
export function clearEmissions() {
	emissions.clear();
}

export async function getRecentEmissions(count: number) {
	await getEmissions();
	const sortedEmissions = Array.from(emissions.values())
		.sort((a, b) => b.emission.date.getTime() - a.emission.date.getTime())
		.slice(0, count)
		.map(item => item.emission);
	console.log(sortedEmissions);
	return sortedEmissions;
}
