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
import type { IEmissionList } from "@/type/EmissionList";
import { fetchGet, getFullUrl } from "@/services/fetch";


/* ----- STORAGE ----- */
let lastSeriesFetch: number = 0;
const series: Map<string, { fetch: number; serie: IEmissionList }> = new Map();


/* ----- PRIVATE FUNCTION ----- */
function _formatJsonSerie(jsonResponse: any) {
	const tmp: IEmissionList = {
		id: jsonResponse["id"],
		name: jsonResponse["nom"],
		description: jsonResponse["description"],
		image: getFullUrl(jsonResponse["imageUrl"]) ?? "/img/default_img.jpg",
		emissions: jsonResponse["emissionIds"] ?? [],
	}
	series.set(tmp.id, { fetch: Date.now(), serie: tmp });
}


/* ----- FETCH ----- */
async function _fetchSeries() {
	try {
		series.clear();
		lastSeriesFetch = Date.now();

		let page = 1;
		let hasNextPage = true;

		while (hasNextPage) {
			const response = await fetchGet(`series?page=${page}`);
			const jsonResponse = await response.json();

			if (jsonResponse.member) {
				for (let i = 0; i < jsonResponse.member.length; i++) {
					_formatJsonSerie(jsonResponse.member[i]);
				}
			}

			if (jsonResponse.view && jsonResponse.view.next)
				page++;
			else
				hasNextPage = false;
		}

	} catch (error) {
		console.error("Error fetching series: ", error);
	}
}

async function _fetchSerie(id: string) {
	try {
		const response = await fetchGet(`series/${id}`);
		const jsonResponse = await response.json();
		_formatJsonSerie(jsonResponse);
	} catch (error) {
		console.error("Error fetching serie: ", error);
	}
}


/* ----- GETTERS ----- */
async function getSeries() {
	if (series.size === 0 || Date.now() - lastSeriesFetch > 1000 * 60 * 60 * 24) await _fetchSeries();
	const tmp: IEmissionList[] = [];
	series.forEach((value) => {
		tmp.push(value.serie);
	});
	return tmp;
}

async function getSerieById(id: string) {
	const serie = series.get(id);
	if (serie === undefined || Date.now() - serie.fetch > 1000 * 60 * 60 * 24) await _fetchSerie(id);
	return series.get(id)?.serie;
}

async function getQuerySeries(query: string) {
	await getSeries();
	const tmp: IEmissionList[] = [];
	series.forEach((value) => {
		if (value.serie.name.toLowerCase().includes(query.toLowerCase()))
			tmp.push(value.serie);
	});
	return tmp;
}


/* ----- EXPORTS ----- */
export { getSeries, getSerieById, getQuerySeries }
