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
import Loader from "@/components/Layout/Loader/Loader";
import React from "react";


/* ----- COMPONENT ----- */
const AddCommentLoading: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center h-80 gap-4 animate-in fade-in duration-300">
			<Loader />
			<p className="textStyle-subtitle color-anti-flash-white">Envoi en cours...</p>
		</div>
	);
};


/* ----- EXPORT ----- */
export default AddCommentLoading;
