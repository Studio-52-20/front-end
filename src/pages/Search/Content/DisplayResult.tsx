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
import DisplayCategorySmall from "@/components/Display/Category/DisplayCategorySmall";
import DisplayEmissionMedium from "@/components/Display/Emission/DisplayEmissionMedium";
import DisplaySerieSmall from "@/components/Display/Serie/DisplaySerieSmall";
import type { ICategory } from "@/type/Category";
import type { IEmission } from "@/type/Emission";
import type { ISerie } from "@/type/Serie";
import React from "react";


/* ----- PROPS ----- */
interface SearchBarProps {
	emissions: IEmission[];
	categories: ICategory[];
	series: ISerie[];
}


/* ----- COMPONENT ----- */
const SearchPageDisplayResult: React.FC<SearchBarProps> = ({ emissions, categories, series }) => {
	const onlyOneCategory = () => {
		return (
			(emissions.length === 0 && series.length === 0 && categories.length >= 1) ||
			(emissions.length === 0 && series.length >= 1 && categories.length === 0) ||
			(emissions.length >= 1 && series.length === 0 && categories.length === 0)
		);
	};

	const onlyOne = onlyOneCategory();
	const gridClass = "grid grid-rows-2 grid-flow-col auto-cols-max overflow-x-auto justify-start";
	const flexClass = "flex flex-wrap justify-center items-start";

	return (
		<div className="flex flex-col gap-16">
			{emissions.length > 0 &&
				<div className="flex flex-col gap-4">
					<div className={`textStyle-title color-anti-flash-white ${onlyOne ? "text-center" : ""}`}>Emissions</div>
					<div className={`gap-4 pb-4 px-1 ${onlyOne || emissions.length <= 2 ? flexClass : gridClass}`}>
						{emissions.map((emission) => (
							<DisplayEmissionMedium emission={emission} key={emission.id} />
						))}
					</div>
				</div>
			}
			{categories.length > 0 &&
				<div className="flex flex-col gap-4">
					<div className={`textStyle-title color-anti-flash-white ${onlyOne ? "text-center" : ""}`}>Categories</div>
					<div className={`gap-4 pb-4 px-1 ${onlyOne || categories.length <= 2 ? flexClass : gridClass}`}>
						{categories.map((category) => (
							<DisplayCategorySmall category={category} key={category.id} />
						))}
					</div>
				</div>
			}
			{series.length > 0 &&
				<div className="flex flex-col gap-4">
					<div className={`textStyle-title color-anti-flash-white ${onlyOne ? "text-center" : ""}`}>Series</div>
					<div className={`gap-4 pb-4 px-1 ${onlyOne || series.length <= 2 ? flexClass : gridClass}`}>
						{series.map((serie) => (
							<DisplaySerieSmall serie={serie} key={serie.id} />
						))}
					</div>
				</div>
			}
		</div>
	);
};

export default SearchPageDisplayResult;
