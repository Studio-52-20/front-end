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


/* ----- TYPES ----- */
export interface IUser {
	id: string;
	username: string;
	image: string;
}

export interface IMember {
	id: string;
	username: string;
	image: string;
	bio: string;
	email: string;
	emissions: string[];
}

export interface IUserMe {
	id: string;
	username: string;
	image: string;
	bio: string;
	email: string;
}
