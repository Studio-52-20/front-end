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
import { getMe } from "@/store/MeStore";
import { isAuthenticated } from "@/services/authService";
import { fetchPost } from "@/services/fetch";


/* ----- COMMENT FUNCTIONS ----- */
const sendComment = async (comment: string, emissionId: string) => {
	if (comment.trim() === "") return;

	const payload = new FormData();
	payload.append("contenu", comment);
	payload.append("emissionId", emissionId);
	if (isAuthenticated()) {
		const me = await getMe();
		if (!me) return;
		payload.append("userId", me.id);
	}

	try {
		const response = await fetchPost("commentaires", payload, "formData");
		if (response.status < 200 || response.status >= 300) {
			const errorData = await response.json();
			console.error("Erreur API:", errorData);
			throw new Error(`Erreur ${response.status}`);
		}
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};


/* ----- EXPORT ----- */
export { sendComment }
