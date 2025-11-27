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
import type { TeamMemberConfig } from "@/type/TeamMemberConfig";


/* ----- DATAS ----- */
const TeamMemberDatas: TeamMemberConfig[] = [
	{
		name: "Clement",
		role: "Président",
		bio: "Celui qui dit oui à tout... sauf quand il dit non.",
	},
	{
		name: "Florian",
		role: "Vice-Président",
		bio: "Le vice-président qui n'a rien de vicieux... enfin presque.",
	},
	{
		name: "Ethan",
		role: "Secrétaire",
		bio: "Prend des notes... parfois même lisibles.",
	},
	{
		name: "Mattéo",
		role: "Trésorier",
		bio: "Compte l'argent qu'on n'a pas encore.",
	},
	{
		name: "Elisa",
		role: "Resp. Journal",
		bio: "Écrit des articles que même elle relit avec surprise.",
	},
	{
		name: "Nathan",
		role: "Resp. Monteur",
		bio: "Coupe, colle, et fait semblant de comprendre le montage.",
	}
];



/* ----- FUNCTIONS ----- */
function GetTeamMemberDatas(): TeamMemberConfig[] {
	return TeamMemberDatas;
}


/* ----- EXPORTS ----- */
export { GetTeamMemberDatas };
