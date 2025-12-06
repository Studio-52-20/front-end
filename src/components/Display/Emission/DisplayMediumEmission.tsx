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
import type { IEmission } from "@/type/Emission";
import React from "react";


/* ----- PROPS ----- */
type DisplayMediumEmissionProps = {
	emission: IEmission
};


/* ----- COMPONENT ----- */
const DisplayMediumEmission: React.FC<DisplayMediumEmissionProps> = ({ emission }) => {
	return (
		<div className="background-bangladesh-green rounded-2xl flex lg:w-[500px] w-[400px] shrink-0 lg:h-48 h-32 overflow-hidden">
			<img
				src={emission.image}
				alt={emission.title}
				className="lg:w-48 lg:h-48 w-32 h-32 object-cover rounded-l-2xl shrink-0"
			/>

			<div className="p-4 flex flex-col gap-2 w-full">
				<div className="textStyle-subtitle color-anti-flash-white">
					{emission.title}
				</div>

				<div className="textStyle-text color-anti-flash-white line-clamp-2 lg:line-clamp-4">
					{emission.description}
				</div>
			</div>
		</div>
	);
};

export default DisplayMediumEmission;
