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
import type { ICategory } from "@/type/Category";
import { fetchGet, getFullUrl } from "@/services/fetch";


/* ----- STORAGE ----- */
let lastCategoriesFetch: number = 0;
const categories: Map<string, { fetch: number; category: ICategory }> = new Map();


/* ----- PRIVATE FUNCTION ----- */
function _formatJsonCategory(jsonResponse: any) {
	const tmp: ICategory = {
		id: jsonResponse["id"],
		name: jsonResponse["nom"],
		image: getFullUrl(jsonResponse["imageUrl"]) ?? "/img/default_img.jpg",
		emissions: jsonResponse["emissionIds"] ?? [],
	}
	categories.set(tmp.id, { fetch: Date.now(), category: tmp });
}


/* ----- FETCH ----- */
async function _fetchCategories() {
	try {
		categories.clear();
		lastCategoriesFetch = Date.now();

		let page = 1;
		let hasNextPage = true;

		while (hasNextPage) {
			const response = await fetchGet(`categories?page=${page}`);
			const jsonResponse = await response.json();

			if (jsonResponse.member) {
				for (let i = 0; i < jsonResponse.member.length; i++) {
					_formatJsonCategory(jsonResponse.member[i]);
				}
			}

			if (jsonResponse.view && jsonResponse.view.next)
				page++;
			else
				hasNextPage = false;
		}

	} catch (error) {
		console.error("Error fetching categories: ", error);
	}
}

async function _fetchCategory(id: string) {
	try {
		const response = await fetchGet(`categories/${id}`);
		const jsonResponse = await response.json();
		_formatJsonCategory(jsonResponse);
	} catch (error) {
		console.error("Error fetching category: ", error);
	}
}


/* ----- GETTERS ----- */
async function getCategories() {
	if (categories.size === 0 || Date.now() - lastCategoriesFetch > 1000 * 60 * 60 * 24) await _fetchCategories();
	const tmp: ICategory[] = [];
	categories.forEach((value) => {
		tmp.push(value.category);
	});
	return tmp;
}

async function getCategoryById(id: string) {
	const category = categories.get(id);
	if (category === undefined || Date.now() - category.fetch > 1000 * 60 * 60 * 24) await _fetchCategory(id);
	return categories.get(id)?.category;
}

async function getQueryCategories(query: string) {
	await getCategories();
	const tmp: ICategory[] = [];
	categories.forEach((value) => {
		if (value.category.name.toLowerCase().includes(query.toLowerCase()))
			tmp.push(value.category);
	});
	return tmp;
}


/* ----- EXPORTS ----- */
export { getCategories, getCategoryById, getQueryCategories }
