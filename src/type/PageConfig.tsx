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
import type { IUserRole } from "./User";


/* ----- TYPE ----- */
export interface IPageConfig {
	name: string;
	path: string;
	content: React.FC;
	displayInNavBar: boolean;
	displayNavBar: boolean;
	allowedAccessRoles: IUserRole[];
}
