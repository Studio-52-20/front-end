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
import type { ITeamMember } from "@/type/TeamMember";


/* ----- DATAS ----- */
const TeamMemberDatas: ITeamMember[] = [
	{
		name: "Clement",
		role: "Président",
		bio: "Celui qui dit oui à tout... sauf quand il dit non.",
		image: "clement.jpeg",
	},
	{
		name: "Florian",
		role: "Vice-Président",
		bio: "Le vice-président qui n'a rien de vicieux... enfin presque.",
		image: "florian.jpeg",
	},
	{
		name: "Ethan",
		role: "Secrétaire",
		bio: "Prend des notes... parfois même lisibles.",
		image: "ethan.jpeg",
	},
	{
		name: "Mattéo",
		role: "Trésorier",
		bio: "Compte l'argent qu'on n'a pas encore.",
		image: "matteo.jpeg",
	},
	{
		name: "Elisa",
		role: "Resp. Journal",
		bio: "Écrit des articles que même elle relit avec surprise.",
		image: "elisa.jpeg",
	},
	{
		name: "Nathan",
		role: "Resp. Monteur",
		bio: "Coupe, colle, et fait semblant de comprendre le montage.",
		image: "nathan.jpeg",
	}
];



/* ----- FUNCTIONS ----- */
function GetTeamMemberDatas(): ITeamMember[] {
	return TeamMemberDatas;
}


/* ----- EXPORTS ----- */
export { GetTeamMemberDatas };
