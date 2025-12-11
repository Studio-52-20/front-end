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
import type { IUser } from "@/type/User";
import { fetchGet, getFullUrl } from "@/services/fetch";


/* ----- DATAS ----- */
let lastUsersFetch: number = 0;
const users: Map<string, { fetch: number; user: IUser }> = new Map();


/* ----- PRIVATE FUNCTION ----- */
function _formatJsonUser(jsonResponse: any) {
	const tmp: IUser = {
		id: jsonResponse["id"],
		username: jsonResponse["pseudo"],
		image: jsonResponse["imageName"] ? getFullUrl(`/uploads/users/${jsonResponse["imageName"]}`) : "/img/anonymous_user.jpg",
	}
	users.set(tmp.id, { fetch: Date.now(), user: tmp });
}


/* ----- FETCH ----- */
async function fetchUsers() {
	try {
		users.clear();
		lastUsersFetch = Date.now();

		let page = 1;
		let hasNextPage = true;

		while (hasNextPage) {
			const response = await fetchGet(`users?page=${page}`);
			const jsonResponse = await response.json();

			if (jsonResponse.member) {
				for (let i = 0; i < jsonResponse.member.length; i++) {
					_formatJsonUser(jsonResponse.member[i]);
				}
			}

			if (jsonResponse.view && jsonResponse.view.next)
				page++;
			else
				hasNextPage = false;
		}

	} catch (error) {
		console.error("Error fetching users: ", error);
	}
}

async function fetchUser(id: string) {
	try {
		const response = await fetchGet(`users/${id}`);
		const jsonResponse = await response.json();
		_formatJsonUser(jsonResponse);
	} catch (error) {
		console.error("Error fetching user: ", error);
	}
}

/* ----- GETTERS ----- */
export async function getUsers() {
	if (users.size === 0 || Date.now() - lastUsersFetch > 1000 * 60 * 60 * 24) await fetchUsers();
	const tmp: IUser[] = [];
	users.forEach((value) => {
		tmp.push(value.user);
	});
	return tmp;
}

export async function getUserById(id: string) {
	const user = users.get(id);
	if (user === undefined || Date.now() - user.fetch > 1000 * 60 * 60 * 24) await fetchUser(id);
	return users.get(id)?.user;
}

export async function getUsersByIds(ids: string[]) {
	const promises = ids.map(async (id) => {
		try {
			return await getUserById(id);
		} catch {
			return undefined;
		}
	});

	const results = await Promise.all(promises);
	return results.filter((c): c is IUser => c !== undefined);
}


/* ----- FUNCTION ----- */
export function clearUsers() {
	users.clear();
}
