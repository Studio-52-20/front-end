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
import type { SocialNetworkConfig } from "@/type/SocialNetworkconfig";


/* ----- DATAS ----- */
const SocialNetworkDatas: SocialNetworkConfig[] = [
	{
		name: "Instagram",
		ref: "https://www.instagram.com/studio52.20/",
		accountName: "@Studio52.20"
	},
	{
		name: "Spotify",
		ref: "https://open.spotify.com/show/4FAq7xczKaPkyk5q2ZfeHA",
		accountName: "Studio5220",
	},
	{
		name: "Discord",
		ref: "https://discord.com/invite/nB2CBCfS3",
		accountName: "Studio 52.20",
	},
];


/* ----- FUNCTIONS ----- */
function GetSocialNetworkDatas(): SocialNetworkConfig[] {
	return SocialNetworkDatas
}


/* ----- EXPORTS ----- */
export { GetSocialNetworkDatas };
