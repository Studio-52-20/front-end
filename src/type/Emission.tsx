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


/* ----- TYPE ----- */
export interface IEmission {
	id: number;
	name: string;
	description: string;
	audio: string;
	date: Date;
	image: string;
	participants: number[];
	comments: number[];
	serie: number | undefined;
}
