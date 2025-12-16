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
import HomePage from "@/pages/Home/HomePage";
import StudioPage from "@/pages/Studio/StudioPage";
import SearchPage from "@/pages/Search/SearchPage";
import MembersPage from "@/pages/Members/Members";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import EmissionPage from "@/pages/Emission/EmissionPage";
import { matchPath } from "react-router-dom";
import SeriePage from "@/pages/Serie/SeriePage";
import CategoryPage from "@/pages/Category/CategoryPage";
import AuthPage from "@/pages/Auth/Auth";
import JournalPage from "@/pages/Journal/Journal";
import AdminPage from "@/pages/Admin/AdminPage";


/* ----- DATAS ----- */
const PagesDatas: IPageConfig[] = [
	{ name: "Home", path: "/", content: HomePage, displayInNavBar: false, displayNavBar: true, authRequired: false },
	{ name: "Studio", path: "/studio", content: StudioPage, displayInNavBar: true, displayNavBar: true, authRequired: false },
	{ name: "Membres", path: "/members", content: MembersPage, displayInNavBar: true, displayNavBar: true, authRequired: false },
	{ name: "Rechercher", path: "/search", content: SearchPage, displayInNavBar: true, displayNavBar: true, authRequired: false },
	{ name: "Emission", path: "/emission/:emissionId", content: EmissionPage, displayInNavBar: false, displayNavBar: true, authRequired: false },
	{ name: "Serie", path: "/serie/:serieId", content: SeriePage, displayInNavBar: false, displayNavBar: true, authRequired: false },
	{ name: "Categorie", path: "/category/:categoryId", content: CategoryPage, displayInNavBar: false, displayNavBar: true, authRequired: false },
	{ name: "Admin", path: "/admin", content: AdminPage, displayInNavBar: true, displayNavBar: true, authRequired: true },
	{ name: "Journal", path: "/journal", content: JournalPage, displayInNavBar: true, displayNavBar: true, authRequired: false },
	{ name: "Auth", path: "/auth", content: AuthPage, displayInNavBar: false, displayNavBar: false, authRequired: false },
	{ name: "NotFound", path: "*", content: NotFoundPage, displayInNavBar: false, displayNavBar: true, authRequired: false },
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
