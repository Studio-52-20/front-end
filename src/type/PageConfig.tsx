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
import type { UserRoleConfig } from "./UserRoleConfig";


/* ----- TYPE ----- */
export type PageConfig = {
	name: string;
	path: string;
	content: React.FC;
	displayInMenu: boolean;
	allowedAccessRoles: UserRoleConfig[];
}
