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
import React, { useEffect, useState } from "react";
import NotFoundPage from "../NotFound/NotFoundPage";
import { Link, useParams } from "react-router-dom";
import type { IEmission } from "@/type/Emission";
import type { ICategory } from "@/type/Category";
import { getCategoryById } from "@/store/CategoryStore";
import Loader from "@/components/Layout/Loader/Loader";
import { getEmissionsByIds } from "@/store/EmissionStore";
import DisplayEmissionSmall from "@/components/Display/Emission/DisplayEmissionSmall";


/* ----- COMPONENT ----- */
const CategoryPage: React.FC = () => {
	const [category, setCategory] = useState<ICategory | undefined>(undefined);
	const [emissions, setEmissions] = useState<IEmission[]>([]);
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			const tmp = await getCategoryById(categoryId ?? "");

			if (!tmp) {
				setCategory(undefined);
				setLoading(false);
				return;
			}

			const [emissionsRes] = await Promise.all([
				tmp.emissions ? getEmissionsByIds(tmp.emissions) : Promise.resolve([]),
			]);

			setCategory(tmp);
			setEmissions(emissionsRes);
			setLoading(false);
		};

		fetchData();
	}, [categoryId]);


	if (loading) {
		return <div className="flex justify-center items-center h-screen textStyle-title">
			<Loader />
		</div>
	}

	if (!category) return <NotFoundPage />;

	return (
		<div className="flex flex-col min-h-screen">
			<div className="h-28 shrink-0"></div>

			<div className="flex flex-col xl:flex-row grow p-8 gap-8 xl:h-[calc(100vh-7rem)]">
				<div className="p-8 flex flex-col gap-6 xl:flex-col xl:justify-around lg:flex-row w-full xl:w-1/3  shrink-0">
					<div className="w-full flex justify-center">
						<img src={category.image} alt={category.name} className="w-[50vw] max-w-[350px] aspect-square object-cover rounded-2xl" />
					</div>
					<div className="textStyle-title color-anti-flash-white text-center">
						{category.name}
					</div>
					<div className="textStyle-text color-anti-flash-white text-center italic">
						{category.emissions.length} Emission{category.emissions.length > 1 ? "s" : ""}
					</div>
				</div>

				{
					emissions.length > 0 ?
						<div className="p-8 flex flex-col gap-4 w-full xl:w-2/3 overflow-y-auto xl:overflow-y-auto">
							{
								emissions.map((emission) => (
									<Link to={`/emission/${emission.id}`}>
										<DisplayEmissionSmall emission={emission} />
									</Link>
								))
							}
						</div> :
						<div className="flex flex-col w-full xl:w-2/3 justify-center items-center">
							<div className="textStyle-subtitle color-anti-flash-white"> No emissions.</div>
						</div>
				}

			</div>
		</div>
	);
};

export default CategoryPage;
