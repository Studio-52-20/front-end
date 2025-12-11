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
import type { IPageConfig } from "@/type/PageConfig";
import { GetAllUserRoles, GetUserRoleByName } from "@/data/UserRoleData";
import HomePage from "@/pages/Home/HomePage";
import StudioPage from "@/pages/Studio/StudioPage";
import SearchPage from "@/pages/Search/SearchPage";
import MembersPage from "@/pages/Members/Members";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import EmissionPage from "@/pages/Emission/EmissionPage";
import { matchPath } from "react-router-dom";
import SeriePage from "@/pages/Serie/SeriePage";
import CategoryPage from "@/pages/Category/CategoryPage";
import AdminPage from "@/pages/Admin/AdminPage";
import AuthPage from "@/pages/Auth/Auth";
import JournalPage from "@/pages/Journal/Journal";


/* ----- DATAS ----- */
const PagesDatas: IPageConfig[] = [
	{ name: "Home", path: "/", content: HomePage, displayInNavBar: false, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	{ name: "The Studio", path: "/studio", content: StudioPage, displayInNavBar: true, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	{ name: "Members", path: "/members", content: MembersPage, displayInNavBar: true, displayNavBar: true, allowedAccessRoles: GetUserRoleByName(["Admin", "Viewer"]) },
	{ name: "Search", path: "/search", content: SearchPage, displayInNavBar: true, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	{ name: "Emission", path: "/emission/:emissionId", content: EmissionPage, displayInNavBar: false, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	{ name: "Serie", path: "/serie/:serieId", content: SeriePage, displayInNavBar: false, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	{ name: "Category", path: "/category/:categoryId", content: CategoryPage, displayInNavBar: false, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	{ name: "Admin", path: "/admin", content: AdminPage, displayInNavBar: true, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	{ name: "Auth", path: "/auth", content: AuthPage, displayInNavBar: false, displayNavBar: false, allowedAccessRoles: GetAllUserRoles() },
	{ name: "Journal", path: "/journal", content: JournalPage, displayInNavBar: true, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
	{ name: "NotFound", path: "*", content: NotFoundPage, displayInNavBar: false, displayNavBar: true, allowedAccessRoles: GetAllUserRoles() },
];


/* ----- FUNCTIONS ----- */
function GetPagesDatas() {
	return PagesDatas;
}

function GetPageDataByName(name: string): IPageConfig | undefined {
	return PagesDatas.find((page) => page.name === name);
}

function GetPageDataByPath(pathname: string): IPageConfig | undefined {
	return PagesDatas.find((page) => {
		return matchPath(page.path, pathname) !== null;
	});
}

function GetPagesDatasInNavBar() {
	return PagesDatas.filter((page) => page.displayInNavBar);
}


/* ----- EXPORTS ----- */
export { GetPagesDatas, GetPageDataByName, GetPageDataByPath, GetPagesDatasInNavBar };
