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
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import { useParams } from "react-router-dom";
import { getSerieById } from "@/store/SerieStore";
import DisplayEmissionList from "@/components/Display/EmissionList/DisplayEmissionList";


/* ----- COMPONENT ----- */
const SeriePage: React.FC = () => {
	const { serieId } = useParams();

	if (!serieId || serieId === "") return <NotFoundPage />;

	return (<DisplayEmissionList id={serieId} getEmissionListById={getSerieById} />);
};


/* ----- EXPORT ----- */
export default SeriePage;
