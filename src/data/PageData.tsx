// Authors:
// >> Clément Lacroix - { clacroix2@etu.uqac.cq }
// >> Lucas Aubriet - { laubriet@etu.uqac.cq }
// >> Martin Vidal - { mvidal@etu.uqac.cq }
// >> Nathan TIROLF - { ntirolf@etu.uqac.cq }
// >> Romane Lesueur - { rlesueur@etu.uqac.cq }
// 
// („• ֊ •„)❤  <  Have a good day !
// --U-----U------------------------


/* ----- IMPORTS ----- */
import type { PageConfig } from "@/type/PageConfig";
import { GetAllUserRoles } from "./UserRoleData";
import HomePage from "@/pages/Home/Home";


/* ----- DATAS ----- */
const PagesDatas: PageConfig[] = [
	{ name: "Home", path: "/", content: HomePage, displayInMenu: false, allowedAccessRoles: GetAllUserRoles() },
	// { name: "The Studio", path: "/studio", content: "@/pages/Studio", displayInMenu: true, allowedAccessRoles: GetAllUserRoles() },
	// { name: "Search", path: "/search", content: "@/pages/Search", displayInMenu: true, allowedAccessRoles: GetAllUserRoles() },
	// { name: "Likes", path: "/likes", content: "@/pages/Likes", displayInMenu: true, allowedAccessRoles: GetUserRoleByName(["Admin", "Viewer"]) },
	// { name: "AdminPanel", path: "/admin-panel", content: "@/pages/AdminPanel", displayInMenu: false, allowedAccessRoles: GetUserRoleByName("Admin") },
	// { name: "NotFound", path: "*", content: "@/pages/NotFound", displayInMenu: false, allowedAccessRoles: GetAllUserRoles() },
];


/* ----- FUNCTIONS ----- */
function GetPagesDatas() {
	return PagesDatas;
}


/* ----- EXPORTS ----- */
export { GetPagesDatas };
