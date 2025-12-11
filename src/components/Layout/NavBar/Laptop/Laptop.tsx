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
import css from "./Laptop.module.css";
import { NavLink } from "react-router-dom";
import { GetPagesDatasInNavBar } from "@/data/PageData";
import Studio5220TextLogo from "@/components/Logo/TextLogo/TextLogo";
import type { IPageConfig } from "@/type/PageConfig";
import DisplayAuthButton from "@/components/Display/Auth/DisplayAuthButton/DisplayAuthButton";
import { isAuthenticated } from "@/services/authService";


/* ----- COMPONENT ----- */
const NavBar: React.FC = () => {
	const pagesConfigs: IPageConfig[] = GetPagesDatasInNavBar();

	return (
		<div className="fixed top-0 left-0 w-full flex justify-between items-center z-50 p-4 h-28  background-dark-green">
			<div className="flex flex-row items-center gap-[5vw]">
				<NavLink to="/">
					<Studio5220TextLogo color="var(--color-mountain-meadow)" size={0.6} />
				</NavLink>
				{pagesConfigs.map((pageConfig) => {
					if (pageConfig.authRequired && !isAuthenticated()) return;
					return (
						<NavLink key={pageConfig.name} to={pageConfig.path} className={({ isActive }) => `${isActive ? css.activeLink : ''} textStyle-subtitle color-mountain-meadow ${css.navbarLink}`}>
							{pageConfig.name}
						</NavLink>
					)
				})}
			</div>
			<DisplayAuthButton />
		</div>
	);
};

export default NavBar;
