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
import type { ISocialNetwork } from "@/type/SocialNetwork";
import React from "react";


/* ----- PROPS ----- */
type DisplaySocialNetworkProps = {
	social: ISocialNetwork,
	color?: string,
};


/* ----- COMPONENT ----- */
const DisplaySocialNetwork: React.FC<DisplaySocialNetworkProps> = ({ social, color = "color-anti-flash-white" }) => {
	return (
		<div className="textStyle-text">
			<a href={social.ref} className={`flex items-center gap-2 hover:opacity-80 transition-opacity ${color}`} target="_blank" rel="noopener noreferrer">
				<img
					src={`/svg/socials/${social.name.toLowerCase()}Icon.svg`}
					alt={`${social.name} Icon`} className="w-5 h-5"
				/>
				<p>
					{social.name} : {social.accountName}
				</p>
			</a>
		</div>
	);
};

export default DisplaySocialNetwork;
