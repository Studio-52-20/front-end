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
import type { EmissionConfig } from "@/type/EmissionConfig";
import { fetchGet } from "@/services/fetch";


/* ----- DATAS ----- */
let lastEmissionsFetch: number = 0;
const emissions: Map<number, { fetch: number; emission: EmissionConfig }> = new Map();


/* ----- FETCH ----- */
async function fetchEmissions() {
	try {
		const response = await fetchGet("emissions");
		const jsonResponse = await response.json();
		emissions.clear();
		lastEmissionsFetch = Date.now();
		for (let i = 0; i < jsonResponse.member.length; i++) {
			const tmp = { ...(jsonResponse.member[i] as EmissionConfig) };
			emissions.set(tmp.id, { fetch: Date.now(), emission: tmp });
		}
	} catch (error) {
		console.error("Error fetching emissions: ", error);
	}
}

async function fetchEmission(uid: number) {
	try {
		const response = await fetchGet(`emissions/${uid}`);
		const jsonResponse = await response.json();
		const tmp = { ...(jsonResponse as EmissionConfig) };
		emissions.set(tmp.id, { fetch: Date.now(), emission: tmp });
	} catch (error) {
		console.error("Error fetching emission: ", error);
	}
}

/* ----- GETTERS ----- */
export async function getEmissions() {
	if (emissions.size === 0 || Date.now() - lastEmissionsFetch > 1000 * 60 * 60 * 24) await fetchEmissions();
	const tmp: EmissionConfig[] = [];
	emissions.forEach((value) => {
		tmp.push(value.emission);
	});
	return tmp;
}

export async function getEmissionById(id: number) {
	const emission = emissions.get(id);
	if (emission === undefined || Date.now() - emission.fetch > 1000 * 60 * 60 * 24) await fetchEmission(id);
	return emissions.get(id)?.emission;
}


/* ----- FUNCTION ----- */
export function clearEmissions() {
	emissions.clear();
}
