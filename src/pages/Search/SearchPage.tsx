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


/* ----- COMPONENT ----- */
const SearchPage: React.FC = () => {
	const [emissions, setEmissions] = React.useState<IEmission[]>([]);
	const [categories, setCategories] = React.useState<ICategory[]>([]);
	const [series, setSeries] = React.useState<ISerie[]>([]);
	const [query, setQuery] = React.useState<string>("");
	const [loading, setLoading] = React.useState<boolean>(false);

	const performSearch = async (query: string, filter: string) => {
		console.log(`Terme: "${query}" | Filtre: "${filter}"`);

		setLoading(true);
		await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async search
		// Here you would typically fetch data from an API based on the query and filter
		setQuery(query);
		setEmissions([]); // Replace with actual search results
		setCategories([]); // Replace with actual search results
		setSeries([]); // Replace with actual search results
		setLoading(false);
	};


	function displayResults() {
		if (loading)
			return <div className="flex-1 flex justify-center items-center textStyle-title">
				<Loader />
			</div>
		if (query === "" && emissions.length === 0 && categories.length === 0 && series.length === 0)
			return
		if (query !== "" && emissions.length === 0 && categories.length === 0 && series.length === 0)
			return <div className="flex-1 flex justify-center items-center textStyle-title">
				No results found.
			</div>
		return <div className="flex-1 overflow-y-auto">
			{/* Render search results here */}
		</div>
	}

	return (
		<div className="flex flex-col items-center p-8 min-h-screen">
			<div className="h-28 shrink-0"></div>
			<SearchBar onSearch={performSearch} />
			<div className="grow w-full flex flex-col">
				{displayResults()}
			</div>
		</div>
	);
};

export default SearchPage;
