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
import { isAuthenticated } from "./authService";


/* ----- DATAS ----- */
const BASE_URL = "https://127.0.0.1:8000";
const API_URL = `${BASE_URL}/api`;


/* ----- PRIVATE FUNCTIONS ----- */
const _getHeaders = (contentType: string | null = "application/json") => {
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


/* ----- GETTER ----- */
function getFullUrl(relativeUrl: string) {
	return `${BASE_URL}${relativeUrl}`;
}


/* ----- PUBLIC FUNCTIONS ----- */
function fetchGet(url: string) {
	return fetch(`${API_URL}/${url}`, {
		method: "GET",
		headers: _getHeaders(),
	});
}

function fetchPost(url: string, body: any, type: "json" | "formData") {
	return fetch(`${API_URL}/${url}`, {
		method: "POST",
		headers: _getHeaders(type == "json" ? "application/json" : null),
		body: type == "json" ? JSON.stringify(body) : body as FormData,
	});
}


/* ----- EXPORT ----- */
export { getFullUrl, fetchGet, fetchPost }
