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
import type { IEmissionList } from "@/type/EmissionList";


/* ----- PROPS ----- */
type DisplayEmissionListDataProps = {
	emissionList: IEmissionList;
};


/* ----- COMPONENT ----- */
const DisplayEmissionListData: React.FC<DisplayEmissionListDataProps> = ({ emissionList }) => {
	return (
		<div className="p-8 flex flex-col gap-6 xl:flex-col xl:justify-around lg:flex-row w-full xl:w-1/3  shrink-0">
			<div className="w-full flex justify-center">
				<img src={emissionList.image} alt={emissionList.name} className="w-[50vw] max-w-[350px] aspect-square object-cover rounded-2xl" />
			</div>

			<div className="flex flex-col gap-2 w-full justify-center items-center">
				<div className="textStyle-title color-anti-flash-white text-center">
					{emissionList.name}
				</div>
				{
					emissionList.description != "" &&
					<div className="textStyle-text color-anti-flash-white text-center">
						{emissionList.description}
					</div>
				}
			</div>
			<div className="textStyle-text color-anti-flash-white text-center italic">
				{emissionList.emissions.length} Emission{emissionList.emissions.length > 1 ? "s" : ""}
			</div>
		</div>
	);
};

export default DisplayEmissionListData;
