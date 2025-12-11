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


/* ----- DATAS ----- */
const BASE_URL = "http://127.0.0.1:8000";
const API_URL = `${BASE_URL}/api`;


/* ----- PRIVATE FUNCTIONS ----- */
const getHeaders = () => {
	return {
	};
};


/* ----- PUBLIC FUNCTIONS ----- */
export function fetchGet(url: string) {
	const completeUrl = `${API_URL}/${url}`;
	return fetch(completeUrl, {
		method: "GET",
		headers: getHeaders(),
	});
}

export function fetchPost(url: string, body: FormData) {
	const completeUrl = `${API_URL}/${url}`;
	return fetch(completeUrl, {
		method: "POST",
		headers: getHeaders(),
		body: body,
	});
}

export function getBaseUrl() {
	return BASE_URL;
}

export function getFullUrl(relativeUrl: string) {
	return `${BASE_URL}${relativeUrl}`;
}
