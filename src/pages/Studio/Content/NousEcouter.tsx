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
import DisplaySocialNetwork from "@/components/Display/SocialNetwork/DisplaySocialNetwork";
import { GetSocialNetworkDatas } from "@/data/SocialNetworkData";
import React from "react";


/* ----- COMPONENT ----- */
const StudioNousEcouterPart: React.FC = () => {
	return (
		<div className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16">
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

					<div className="flex flex-col gap-8">
						<div className="textStyle-title color-caribbean-green">
							OÙ NOUS ÉCOUTER ?
						</div>

						<div className="textStyle-text">
							Nos émissions sont déjà en ligne ! <br />
							Tu peux nous écouter sur Spotify ou directement ICI <br />
							(va dans la section Search) <br />
							Choisis ton support et profite de nos podcasts.
						</div>

						<div className="textStyle-text italic">
							Suis-nous pour ne rien manquer 👇
						</div>

						<div>
							<div className="flex flex-col gap-4">
								{GetSocialNetworkDatas().map((social, index) => <DisplaySocialNetwork key={index} social={social} color="color-caribbean-green" />)}
							</div>
						</div>
					</div>

					<div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ml-12">
						<img src="/img/illustrations/casqueAudio.png" alt="Image casque Audio vert" className="w-full h-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudioNousEcouterPart;
