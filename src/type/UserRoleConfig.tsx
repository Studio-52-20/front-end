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


/* ----- TYPE ----- */
export type UserRoleConfig = {
	roleName: string;
}

export type DisplayUserConfig = {
	id: number;
	username: string;
	avatar: string;
}

export type UserConfig = {
	id: number;
	username: string;
	avatar: string;
	role: UserRoleConfig;
}
