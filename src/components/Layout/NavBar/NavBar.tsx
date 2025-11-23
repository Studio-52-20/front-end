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
import { GetPageDataByPath } from "@/data/PageData";
import React from "react";
import { useLocation } from "react-router-dom";


/* ----- COMPONENTS ----- */
import Laptop from "@/components/Layout/NavBar/Laptop/Laptop";
import Mobile from "@/components/Layout/NavBar/mobile/Mobile";


/* ----- COMPONENT ----- */
const NavBar: React.FC = () => {
	const location = useLocation();
	const pageData = GetPageDataByPath(location.pathname);

	if (!pageData || !pageData.displayNavBar) {
		return null;
	}

	return (
		<>
			<div className="display-laptop-mode">
				<Laptop />
			</div>
			<div className="display-mobile-mode">
				<Mobile />
			</div>
		</>
	);
};

export default NavBar;
