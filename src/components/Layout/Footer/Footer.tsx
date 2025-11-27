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
import React from "react";
import { GetSocialNetworkDatas } from "@/data/SocialNetworkData";
import DisplaySocialNetwork from "@/components/Display/SocialNetwork/DisplaySocialNetwork";


/* ----- COMPONENT ----- */
const Footer: React.FC = () => {
	return (
		<div>
			<div className={'bg-(--color-bangladesh-green) py-12 px-4 md:px-8 lg:px-16'}>
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

						<div>
							<div className="textStyle-subtitle mb-4 color-caribbean-green">
								Radio 52.20
							</div>
							<div className="textStyle-text">
								Bureau : P0-5220
							</div>
						</div>

						<div>
							<div className="textStyle-subtitle mb-4 color-caribbean-green">
								Contact
							</div>
							<div className="textStyle-text">
								<a href="mailto:club_studio5220@uqac.ca" className="flex items-center gap-2">
									<img src="/svg/socials/outlookIcon.svg" alt="Email" className="w-5 h-5" />
									club_studio5220@uqac.ca
								</a>
							</div>
						</div>

						<div>
							<div className="textStyle-subtitle mb-4 color-caribbean-green">
								Réseaux sociaux
							</div>
							<div className="flex flex-col gap-4">
								{GetSocialNetworkDatas().map((social, index) => <DisplaySocialNetwork key={index} social={social} />)}
							</div>
						</div>
					</div>
					<div className="pt-6 text-center border-t border-(--color-mountain-meadow) textStyle-text">
						© 2024 Radio 52.20 - UQAC | Prends le micro, on t'écoute
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
