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
const StudioPresentationPart: React.FC = () => {
	const TextsPoints: string[] = [
		"On parle de vie étudiante (sans se prendre trop au sérieux)",
		"On découvre des projets d'étudiants",
		"On invite des profs, artistes et passionnés",
		"On diffuse des émissions et des podcasts 100% made in UQAC",
	]

	return (
		<div className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16">
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

					<div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ml-12">
						<img src="/img/illustrations/tableDeMixage.png" alt="Image d'une table de mixage verte" className="w-full h-full object-cover" />
					</div>

					<div className="order-1 lg:order-2 flex flex-col gap-8">
						<div className="textStyle-title color-caribbean-green">
							C'EST QUOI ?
						</div>
						<div className="flex flex-col gap-2">
							<div className="textStyle-text">
								Une radio chill où :
							</div>
							{
								TextsPoints.map((point, index) =>
									<div key={index} className="flex items-start gap-2">
										<span className="color-caribbean-green">▸</span>
										<span>{point}</span>
									</div>
								)
							}
						</div>
						<div className="textStyle-text italic">
							Bref, un espace où chacun peut prendre le micro et raconter quelque chose.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudioPresentationPart;
