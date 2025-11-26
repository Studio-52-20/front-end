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
import type { UserConfig } from "@/type/UserRoleConfig";
import React from "react";


/* ----- PROPS ----- */
type DisplayUserHoverProps = {
	user: UserConfig;
};


/* ----- COMPONENT ----- */
const DisplayUserHover: React.FC<DisplayUserHoverProps> = ({ user }) => {
	return (
		<div className="group flex flex-row items-center gap-2 -ml-6 first:ml-0 rounded-full transition-all duration-300 border-4 border-transparent group-hover:border-(--color-mountain-meadow) hover:pr-6 hover:bg-(--color-mountain-meadow)">
			<img src={user.avatar} alt={user.username} className="w-16 h-16 rounded-full object-cover" />
			<div className="overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-300">
				<div className="-translate-x-2.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 textStyle-subtitle color-anti-flash-white whitespace-nowrap">
					{user.username}
				</div>
			</div>
		</div>
	);
};

export default DisplayUserHover;
