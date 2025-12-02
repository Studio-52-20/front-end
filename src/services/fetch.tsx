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
const API_URL = "http://localhost:8000/api";


/* ----- PRIVATE FUNCTIONS ----- */
const getHeaders = () => {
	return {
		"Content-Type": "application/json",
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

export function fetchPut(url: string, body: unknown) {
	const completeUrl = `${API_URL}/${url}`;
	return fetch(completeUrl, {
		method: "PUT",
		headers: getHeaders(),
		body: JSON.stringify(body),
	});
}

export function fetchPost(url: string, body: unknown) {
	const completeUrl = `${API_URL}/${url}`;
	return fetch(completeUrl, {
		method: "POST",
		headers: getHeaders(),
		body: JSON.stringify(body),
	});
}

export function fetchDelete(url: string) {
	const completeUrl = `${API_URL}/${url}`;
	return fetch(completeUrl, {
		method: "DELETE",
		headers: getHeaders(),
	});
}

export function getBaseUrl() {
	return API_URL;
}
