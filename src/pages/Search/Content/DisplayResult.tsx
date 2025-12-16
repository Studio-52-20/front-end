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
import type { IEmission } from "@/type/Emission";
import type { IEmissionList } from "@/type/EmissionList";
import { Link } from "react-router-dom";
import DisplayCategorySmall from "@/components/Display/Category/DisplayCategorySmall";
import DisplayEmissionMedium from "@/components/Display/Emission/DisplayEmissionMedium";
import DisplaySerieSmall from "@/components/Display/Serie/DisplaySerieSmall";


/* ----- PROPS ----- */
interface SearchBarProps {
	emissions: IEmission[];
	categories: IEmissionList[];
	series: IEmissionList[];
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

	const elements = [
		{
			lenOk: emissions.length > 0,
			title: "Emissions",
			list: emissions,
			linkPrefix: '/emission/',
			component: (item: any) => <DisplayEmissionMedium emission={item as IEmission} />
		},
		{
			lenOk: categories.length > 0,
			title: "Categories",
			list: categories,
			linkPrefix: '/category/',
			component: (item: any) => <DisplayCategorySmall category={item as IEmissionList} />
		},
		{
			lenOk: series.length > 0,
			title: "Series",
			list: series,
			linkPrefix: '/serie/',
			component: (item: any) => <DisplaySerieSmall serie={item as IEmissionList} />
		}
	]

	return (
		<div className="flex flex-col gap-16">
			{
				elements.map((elem) => {
					if (elem.lenOk)
						return (
							<div className="flex flex-col gap-4">
								<div className={`textStyle-title color-anti-flash-white ${onlyOne ? "text-center" : ""}`}>{elem.title}</div>
								<div className={`gap-4 pb-4 px-1 ${onlyOne || emissions.length <= 2 ? flexClass : gridClass}`}>
									{elem.list.map((item) => (
										<Link key={item.id} to={`${elem.linkPrefix}${item.id}`}>
											{elem.component(item)}
										</Link>
									))}
								</div>
							</div>
						);
				})
			}
		</div>
	);
};


/* ----- EXPORT ----- */
export default SearchPageDisplayResult;
