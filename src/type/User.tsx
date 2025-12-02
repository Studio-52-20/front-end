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
export interface IUserRole {
	roleName: string;
}

export type IUser = {
	id: number;
	username: string;
	avatar: string;
}


/* ----- Data ----- */
export const DefaultIUser: IUser = {
	id: -1,
	username: "Unknown User",
	avatar: "/img/anonymous_user.png",
}
