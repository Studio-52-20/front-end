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
import type { IEmissionList } from "@/type/EmissionList";
import React from "react";


/* ----- PROPS ----- */
type DisplaySerieSmallProps = {
	serie: IEmissionList
};


/* ----- COMPONENT ----- */
const DisplaySerieSmall: React.FC<DisplaySerieSmallProps> = ({ serie }) => {
	return (
		<div className="rounded-2xl flex flex-col w-32 lg:w-56 shrink-0 gap-2">
			<img
				src={serie.image}
				alt={serie.name}
				className="lg:w-56 lg:h-56 w-32 h-32 object-cover rounded-2xl shrink-0"
			/>

			<div className="textStyle-subtitle color-anti-flash-white text-center">
				{serie.name}
			</div>
		</div>
	);
};


/* ----- EXPORT ----- */
export default DisplaySerieSmall;
