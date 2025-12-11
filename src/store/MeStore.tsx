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
import type { IUserMe } from "@/type/User";
import { fetchGet } from "@/services/fetch";


/* ----- DATAS ----- */
let lastUsersFetch: number = 0;
let me: IUserMe | undefined = undefined


/* ----- PRIVATE FUNCTION ----- */
function _formatJsonUser(jsonResponse: any) {
	const tmp: IUserMe = {
		id: jsonResponse["id"],
		username: jsonResponse["pseudo"],
		image: jsonResponse["image"] ?? "/img/anonymous_user.jpg",
		bio: jsonResponse["bio"],
		email: jsonResponse["email"]
	}
	me = tmp;
}


/* ----- FETCH ----- */
async function fetchMe() {
	try {
		const response = await fetchGet("me");
		const jsonResponse = await response.json();
		me = undefined;
		lastUsersFetch = Date.now();
		_formatJsonUser(jsonResponse);
	} catch (error) {
		console.error("Error fetching users: ", error);
	}
}

/* ----- GETTERS ----- */
export async function getMe() {
	if (me === undefined || Date.now() - lastUsersFetch > 1000 * 60 * 60 * 24) await fetchMe();
	return me;
}

/* ----- FUNCTION ----- */
export function clearMe() {
	me = undefined;
}
