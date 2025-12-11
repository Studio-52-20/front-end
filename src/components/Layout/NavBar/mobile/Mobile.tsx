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
import React, { useState } from "react";
import css from "./Mobile.module.css";
import { Ellipsis } from "lucide-react";
import { NavLink } from "react-router-dom";
import { GetPagesDatasInNavBar } from "@/data/PageData";
import Studio5220TextLogo from "@/components/Logo/TextLogo/TextLogo";
import type { IPageConfig } from "@/type/PageConfig";
import DisplayAuthButton from "@/components/Display/Auth/DisplayAuthButton/DisplayAuthButton";


/* ----- COMPONENT ----- */
const NavBar: React.FC = () => {
	const [open, setOpen] = useState(false);
	const pagesConfigs: IPageConfig[] = GetPagesDatasInNavBar();

	return (
		<>
			<div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 h-28 background-dark-green">
				<NavLink to="/" onClick={() => setOpen(false)}>
					<Studio5220TextLogo color="var(--color-mountain-meadow)" size={0.6} />
				</NavLink>
				<div onClick={() => setOpen(!open)}>
					<Ellipsis size={32} stroke="var(--color-mountain-meadow)" />
				</div>
			</div>
			<div className={`${open ? css.overlayShow : ''} ${css.overlay}`} onClick={() => setOpen(false)}>
				<div className={`${open ? css.slideIn : css.slideOut} ${css.sidebar}`}>
					<div className="flex flex-col flex-1 justify-start items-center gap-8 h-full">
						{pagesConfigs.map((pageConfig) => {
							return (
								<NavLink key={pageConfig.name} to={pageConfig.path} className={({ isActive }) => `${isActive ? css.activeLink : ''} textStyle-subtitle color-anti-flash-white ${css.navbarLink}`} onClick={() => setOpen(false)}>
									{pageConfig.name}
								</NavLink>
							)
						})}
					</div>
					<div className="flex justify-end p-6">
						<DisplayAuthButton />
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
