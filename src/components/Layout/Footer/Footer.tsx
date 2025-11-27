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


/* ----- COMPONENT ----- */
const Footer: React.FC = () => {
	type SocialNetworkConfig = {
		name: string,
		ref: string,
		accountName: string,
	};

	const SocialNetworks: SocialNetworkConfig[] = [
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
									<img src="/svg/outlookIcon.svg" alt="Email" className="w-5 h-5" />
									club_studio5220@uqac.ca
								</a>
							</div>
						</div>

						<div>
							<div className="textStyle-subtitle mb-4 color-caribbean-green">
								Réseaux sociaux
							</div>
							<div className="flex flex-col gap-4">
								{
									SocialNetworks.map(social =>
										<div className="textStyle-text">
											<a href={social.ref} className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
												<img
													src={`/svg/${social.name.toLowerCase()}Icon.svg`}
													alt={`${social.name} Icon`} className="w-5 h-5"
												/>
												<p>
													{social.name} : {social.accountName}
												</p>
											</a>
										</div>
									)
								}
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
