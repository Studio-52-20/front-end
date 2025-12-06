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
import { getCategories } from "@/store/CategoryStore";
import { getRecentEmissions } from "@/store/EmissionStore";
import { getSeries } from "@/store/SerieStore";
import type { ICategory } from "@/type/Category";
import type { IEmission } from "@/type/Emission";
import type { ISerie } from "@/type/Serie";
import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ----- COMPONENT ----- */
const HomePage: React.FC = () => {
	const [emissions, setEmissions] = useState<IEmission[]>([]);
	const [series, setSeries] = useState<ISerie[]>([]);
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			const [emissionsRes, seriesRes, categoriesRes] = await Promise.all([
				getRecentEmissions(8), getSeries(), getCategories()
			]);

			setEmissions(emissionsRes);
			setSeries(seriesRes);
			setCategories(categoriesRes);
			setLoading(false);
		};
		fetchData();
	}, []);

	function ScrollToId(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	if (loading) {
		return <div className="flex justify-center items-center h-screen textStyle-title">
			Loading...
		</div>
	}

	return emissions.length > 0 ?
		<div className="flex flex-col gap-16 p-8">
			<div className="h-28 shrink-0"></div>

			<div>
				<div className="justify-around items-center flex h-[60vh]">
					<div className="flex flex-col">
						<div className="textStyle-huge color-anti-flash-white">
							Studio 52.20
						</div>
						<Link to="/studio">
							<div className="flex items-center textStyle-subtitle color-anti-flash-white border-2 border-anti-flash-white w-max mt-4 px-4 py-2 rounded-lg animate-pulse">
								<div>Découvrez nous en un clic !</div>
								<ChevronRight className="inline-block w-6 h-6 ml-2" />
							</div>
						</Link>
					</div>
					<img src="/img/micro.png" alt="Microphone" className="h-full mt-8 hidden sm:block" />
				</div>
				<div className="w-full flex justify-center items-center p-8" onClick={() => ScrollToId("me")} id="me">
					<ChevronDown className="w-12 h-12 color-anti-flash-white animate-bounce" />
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<div className="textStyle-title color-anti-flash-white">Recent Emissions</div>
				<div className="flex overflow-x-auto gap-8 p-4">
					{emissions.map((emission) => (
						<Link to={`/emission/${emission.id}`} key={emission.id}>
							<DisplayEmissionMedium emission={emission} />
						</Link>
					))}
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<div className="textStyle-title color-anti-flash-white">Categories</div>
				<div className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto pb-4 px-1">
					{categories.map((category) => (
						<DisplayCategorySmall category={category} key={category.id} />
					))}
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<div className="textStyle-title color-anti-flash-white">Series</div>
				<div className="flex overflow-x-auto gap-8 p-4">
					{series.map((serie) => (
						<DisplaySerieSmall serie={serie} key={serie.id} />
					))}
				</div>
			</div>
		</div >
		:
		<div className="flex justify-center items-center h-screen textStyle-title">
			No emissions...
		</div>

};

export default HomePage;
