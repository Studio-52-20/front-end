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
import type { IComment } from "@/type/Comment";
import { fetchGet } from "@/services/fetch";


/* ----- STORAGE ----- */
let lastCommentsFetch: number = 0;
const comments: Map<string, { fetch: number; comment: IComment }> = new Map();


/* ----- PRIVATE FUNCTION ----- */
function _formatJsonComment(jsonResponse: any) {
	const tmp: IComment = {
		id: jsonResponse["id"],
		content: jsonResponse["contenu"],
		date: new Date(jsonResponse["updatedAt"]),
		user: jsonResponse["userId"],
		emission: jsonResponse["emissionId"],
	}
	comments.set(tmp.id, { fetch: Date.now(), comment: tmp });
}


/* ----- FETCH ----- */
async function _fetchComments() {
	try {
		comments.clear();

		let page = 1;
		let hasNextPage = true;

		while (hasNextPage) {
			const response = await fetchGet(`commentaires?page=${page}`);
			const jsonResponse = await response.json();

			if (jsonResponse.member) {
				for (let i = 0; i < jsonResponse.member.length; i++) {
					_formatJsonComment(jsonResponse.member[i]);
				}
			}

			if (jsonResponse.view && jsonResponse.view.next)
				page++;
			else
				hasNextPage = false;
		}

	} catch (error) {
		console.error("Error fetching comments: ", error);
	}
}

async function _fetchComment(id: string) {
	try {
		const response = await fetchGet(`commentaires/${id}`);
		const jsonResponse = await response.json();
		_formatJsonComment(jsonResponse);
	} catch (error) {
		console.error("Error fetching comment: ", error);
	}
}

/* ----- GETTERS ----- */
async function getComments() {
	if (comments.size === 0 || Date.now() - lastCommentsFetch > 1000 * 60 * 60 * 24) await _fetchComments();
	const tmp: IComment[] = [];
	comments.forEach((value) => {
		tmp.push(value.comment);
	});
	return tmp;
}

async function getCommentById(id: string) {
	const comment = comments.get(id);
	if (comment === undefined || Date.now() - comment.fetch > 1000 * 60 * 60 * 24) await _fetchComment(id);
	return comments.get(id)?.comment;
}

async function getCommentsByIds(ids: string[]) {
	const promises = ids.map(async (id) => {
		try {
			return await getCommentById(id);
		} catch {
			return undefined;
		}
	});

	const results = await Promise.all(promises);
	return results.filter((c): c is IComment => c !== undefined);
}


/* ----- EXPORTS ----- */
export { getComments, getCommentById, getCommentsByIds }
