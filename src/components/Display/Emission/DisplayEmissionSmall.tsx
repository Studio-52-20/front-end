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
import { ChevronRight } from "lucide-react";
import React from "react";


/* ----- PROPS ----- */
type DisplayEmissionSmallProps = {
	emission: IEmission
};


/* ----- COMPONENT ----- */
const DisplayEmissionSmall: React.FC<DisplayEmissionSmallProps> = ({ emission }) => {
	return (
		<div className="rounded-lg flex w-full shrink-0 lg:h-24 h-16 overflow-hidden items-center gap-4 px-4 group">
			<ChevronRight className="group-hover:lg:w-12 lg:h-12 group-hover:w-8 w-0 h-8 color-anti-flash-white transition-all duration-300" />
			<img
				src={emission.image}
				alt={emission.title}
				className="lg:w-24 lg:h-24 w-16 h-16 object-cover rounded-l-lg shrink-0"
			/>

			<div className="background-bangladesh-green p-4 flex flex-col gap-2 w-full">
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

export default DisplayEmissionSmall;
