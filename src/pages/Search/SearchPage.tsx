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
import { NavLink } from "react-router-dom";


/* ----- COMPONENT ----- */
const SearchPage: React.FC = () => {
	return (
		<div className="flex flex-col gap-16 justify-center items-center h-screen">
			<h1 className="textStyle-title">Welcome to Search page</h1>
			<NavLink to="/emission" className="textStyle-subtitle color-mountain-meadow underline">
				Go to Emission Page
			</NavLink>
		</div>
	);
};

export default SearchPage;
