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
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import type { IEmission } from "@/type/Emission";
import type { IEmissionList } from "@/type/EmissionList";
import Loader from "@/components/Layout/Loader/Loader";
import { getEmissionsByIds } from "@/store/EmissionStore";
import DisplayEmissionsList from "@/components/Display/Emission/DisplayEmissionsList";
import DisplayEmissionListData from "@/components/Display/EmissionList/DisplayEmissionListData";


/* ----- PROPS ----- */
type DisplayEmissionListProps = {
	id: string;
	getEmissionListById: (id: string) => Promise<IEmissionList | undefined>;
};


/* ----- COMPONENT ----- */
const DisplayEmissionList: React.FC<DisplayEmissionListProps> = ({ id, getEmissionListById }) => {
	const [emissionList, setEmissionList] = useState<IEmissionList | undefined>(undefined);
	const [emissions, setEmissions] = useState<IEmission[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			const tmp = await getEmissionListById(id);
			if (!tmp) {
				setEmissionList(undefined);
				setLoading(false);
				return;
			}

			const [emissionsRes] = await Promise.all([
				tmp.emissions ? getEmissionsByIds(tmp.emissions) : Promise.resolve([]),
			]);

			setEmissionList(tmp);
			setEmissions(emissionsRes);
			setLoading(false);
		};

		fetchData();
	}, [id]);


	if (loading) {
		return <div className="flex justify-center items-center h-screen textStyle-title">
			<Loader />
		</div>
	}

	if (!emissionList) return <NotFoundPage />;

	return (
		<div className="flex flex-col min-h-screen">
			<div className="h-28 shrink-0"></div>

			<div className="flex flex-col xl:flex-row grow p-8 gap-8 xl:h-[calc(100vh-7rem)]">
				<DisplayEmissionListData emissionList={emissionList} />
				<DisplayEmissionsList emissions={emissions} />
			</div>
		</div>
	);
};


/* ----- EXPORT ----- */
export default DisplayEmissionList;
