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
import type { ISerie } from "@/type/Serie";
import { fetchGet } from "@/services/fetch";


/* ----- DATAS ----- */
let lastSeriesFetch: number = 0;
const series: Map<number, { fetch: number; serie: ISerie }> = new Map();


/* ----- FETCH ----- */
export async function fetchSeries() {
	try {
		const response = await fetchGet("series");
		const jsonResponse = await response.json();
		series.clear();
		lastSeriesFetch = Date.now();
		for (let i = 0; i < jsonResponse.member.length; i++) {
			const tmp = { ...(jsonResponse.member[i] as ISerie) };
			series.set(tmp.id, { fetch: Date.now(), serie: tmp });
		}
	} catch (error) {
		console.error("Error fetching series: ", error);
	}
}

export async function fetchSerie(uid: number) {
	try {
		const response = await fetchGet(`series/${uid}`);
		const jsonResponse = await response.json();
		const tmp = { ...(jsonResponse as ISerie) };
		series.set(tmp.id, { fetch: Date.now(), serie: tmp });
	} catch (error) {
		console.error("Error fetching serie: ", error);
	}
}

/* ----- GETTERS ----- */
export async function getSeries() {
	if (series.size === 0 || Date.now() - lastSeriesFetch > 1000 * 60 * 60 * 24) await fetchSeries();
	const tmp: ISerie[] = [];
	series.forEach((value) => {
		tmp.push(value.serie);
	});
	return tmp;
}

export async function getSerieById(id: number) {
	const serie = series.get(id);
	if (serie === undefined || Date.now() - serie.fetch > 1000 * 60 * 60 * 24) await fetchSerie(id);
	return series.get(id)?.serie;
}


/* ----- FUNCTION ----- */
export function clearSeries() {
	series.clear();
}
