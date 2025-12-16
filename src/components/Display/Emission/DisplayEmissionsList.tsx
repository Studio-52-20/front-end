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
import { Link } from "react-router-dom";
import type { IEmission } from "@/type/Emission";
import DisplayEmissionSmall from "@/components/Display/Emission/DisplayEmissionSmall";


/* ----- PROPS ----- */
type EmissionsListProps = {
	emissions: IEmission[];
};


/* ----- COMPONENT ----- */
const EmissionsList: React.FC<EmissionsListProps> = ({ emissions }) => {
	if (emissions.length === 0)
		return (
			<div className="flex flex-col w-full xl:w-2/3 justify-center items-center">
				<div className="textStyle-subtitle color-anti-flash-white"> No emissions.</div>
			</div>
		);

	return (
		<div className="p-8 flex flex-col gap-4 w-full xl:w-2/3 overflow-y-auto xl:overflow-y-auto">
			{
				emissions.map((emission) => (
					<Link to={`/emission/${emission.id}`} key={emission.id}>
						<DisplayEmissionSmall emission={emission} />
					</Link>
				))
			}
		</div>
	);
};


/* ----- EXPORT ----- */
export default EmissionsList;
