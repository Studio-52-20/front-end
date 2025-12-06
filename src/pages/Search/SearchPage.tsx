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
import SearchBar from "./Content/SearchBar";
import type { IEmission } from "@/type/Emission";
import type { ICategory } from "@/type/Category";
import type { ISerie } from "@/type/Serie";
import Loader from "@/components/Layout/Loader/Loader";
import { getSeries } from "@/store/SerieStore";
import { getEmissions } from "@/store/EmissionStore";
import { getCategories } from "@/store/CategoryStore";
import SearchPageDisplayResult from "./Content/DisplayResult";


/* ----- COMPONENT ----- */
const SearchPage: React.FC = () => {
	const [emissions, setEmissions] = React.useState<IEmission[]>([]);
	const [categories, setCategories] = React.useState<ICategory[]>([]);
	const [series, setSeries] = React.useState<ISerie[]>([]);
	const [query, setQuery] = React.useState<string>("");
	const [loading, setLoading] = React.useState<boolean>(false);

	const performSearch = async (query: string, filter: string) => {
		setLoading(true);

		const [emissionsRes, categoriesRes, seriesRes] = await Promise.all([
			filter == "all" || filter == "emission" ? getEmissions() : Promise.resolve([]),
			filter == "all" || filter == "category" ? getCategories() : Promise.resolve([]),
			filter == "all" || filter == "serie" ? getSeries() : Promise.resolve([]),
		]);

		setQuery(query);
		setEmissions(emissionsRes);
		setCategories(categoriesRes);
		setSeries(seriesRes);
		setLoading(false);
	};

	const clearSearch = () => {
		setEmissions([]);
		setCategories([]);
		setSeries([]);
		setQuery("");
	}


	function displayResults() {
		if (loading)
			return <div className="flex-1 flex justify-center items-center textStyle-title">
				<Loader />
			</div>
		if (query !== "" && emissions.length === 0 && categories.length === 0 && series.length === 0)
			return <div className="flex-1 flex justify-center items-center textStyle-subtitle">
				No results found.
			</div>
		return <SearchPageDisplayResult emissions={emissions} categories={categories} series={series} />;
	}

	return (
		<div className="flex flex-col items-center p-8 min-h-screen">
			<div className="h-28 shrink-0"></div>
			<SearchBar onSearch={performSearch} onClear={clearSearch} />
			<div className="grow w-full flex flex-col">
				{displayResults()}
			</div>
		</div>
	);
};

export default SearchPage;
