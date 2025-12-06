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
import type { ICategory } from "@/type/Category";
import React from "react";


/* ----- PROPS ----- */
type DisplayCategorySmallProps = {
	category: ICategory
};


/* ----- COMPONENT ----- */
const DisplayCategorySmall: React.FC<DisplayCategorySmallProps> = ({ category }) => {
	return (
		<div className="relative rounded-2xl flex w-[300px] shrink-0 overflow-hidden">
			<img src={category.image} alt="" className="absolute inset-0 w-full h-full object-cover blur-sm scale-110" />
			<div className="relative h-full w-full py-6 px-8 flex flex-col justify-end gap-2 bg-black/20">
				<div className="textStyle-subtitle color-anti-flash-white drop-shadow-md">
					{category.name}
				</div>
			</div>
		</div>
	);
};

export default DisplayCategorySmall;
