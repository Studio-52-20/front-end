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

import { isAuthenticated } from "./authService";


/* ----- DATAS ----- */
const BASE_URL = "https://127.0.0.1:8000";
const API_URL = `${BASE_URL}/api`;


/* ----- PRIVATE FUNCTIONS ----- */
const getHeaders = (contentType: string | null = "application/json") => {
	let headers: HeadersInit = {};

	if (contentType) {
		headers = { ...headers, "Content-Type": contentType };
	}

	if (isAuthenticated()) {
		const token = localStorage.getItem("authToken");
		if (token) {
			headers = { ...headers, "Authorization": `Bearer ${token}` };
		}
	}
	return headers;
};


/* ----- PUBLIC FUNCTIONS ----- */
export function fetchGet(url: string) {
	const completeUrl = `${API_URL}/${url}`;
	return fetch(completeUrl, {
		method: "GET",
		headers: getHeaders(),
	});
}

export function fetchPostFormData(url: string, body: FormData) {
	const completeUrl = `${API_URL}/${url}`;

	return fetch(completeUrl, {
		method: "POST",
		headers: getHeaders(null),
		body: body,
	});
}

export function fetchPostJson(url: string, body: any) {
	const completeUrl = `${API_URL}/${url}`;
	return fetch(completeUrl, {
		method: "POST",
		headers: getHeaders("application/json"),
		body: JSON.stringify(body),
	});
}

export function getBaseUrl() {
	return BASE_URL;
}

export function getFullUrl(relativeUrl: string) {
	return `${BASE_URL}${relativeUrl}`;
}
