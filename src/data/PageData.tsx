/*
	Authors:
	>> Clément Lacroix - { clacroix2@etu.uqac.cq }
	>> Lucas Aubriet - { laubriet@etu.uqac.cq }
	>> Martin Vidal - { mvidal@etu.uqac.cq }
	>> Nathan TIROLF - { ntirolf@etu.uqac.cq }
	>> Romane Lesueur - { rlesueur@etu.uqac.cq }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { PageConfig } from "@/type/PageConfig";
import { GetAllUserRoles, GetUserRoleByName } from "@/data/UserRoleData";
import HomePage from "@/pages/Home/HomePage";
import StudioPage from "@/pages/Studio/StudioPage";
import SearchPage from "@/pages/Search/SearchPage";
import LikesPage from "@/pages/Likes/LikesPage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import EmissionPage from "@/pages/Emission/EmissionPage";


/* ----- DATAS ----- */
const PagesDatas: PageConfig[] = [
	{ name: "Home", path: "/", content: HomePage, displayInNavBar: false, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	{ name: "The Studio", path: "/studio", content: StudioPage, displayInNavBar: true, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	{ name: "Search", path: "/search", content: SearchPage, displayInNavBar: true, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	{ name: "My Likes", path: "/likes", content: LikesPage, displayInNavBar: true, displayNavBar: true, allowedAccessRoles: GetUserRoleByName(["Admin", "Viewer"]) },
	{ name: "Emission", path: "/emission/:emissionId", content: EmissionPage, displayInNavBar: false, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	// { name: "Login", path: "/login", content: "@/pages/LoginPage", displayInNavBar: false, displayNavBar: false, allowedAccessRoles: GetAllUserRoles() },
	// { name: "AdminPanel", path: "/admin-panel", content: "@/pages/AdminPanel", displayInNavBar: false, displayNavBar: true, allowedAccessRoles: GetUserRoleByName("Admin") },
	{ name: "NotFound", path: "*", content: NotFoundPage, displayInNavBar: false, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
];


/* ----- FUNCTIONS ----- */
function GetPagesDatas() {
	return PagesDatas;
}

function GetPageDataByName(name: string): PageConfig | undefined {
	return PagesDatas.find((page) => page.name === name);
}

function GetPageDataByPath(path: string): PageConfig | undefined {
	return PagesDatas.find((page) => page.path === path);
}

function GetPagesDatasInNavBar() {
	return PagesDatas.filter((page) => page.displayInNavBar);
}


/* ----- EXPORTS ----- */
export { GetPagesDatas, GetPageDataByName, GetPageDataByPath, GetPagesDatasInNavBar };
