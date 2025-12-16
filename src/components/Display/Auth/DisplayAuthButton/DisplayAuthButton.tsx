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
import { isAuthenticated, logout } from "@/services/authService";
import { getMe } from "@/store/MeStore";
import type { IUserMe } from "@/type/User";
import { LogOut, UserCircle2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


/* ----- COMPONENT ----- */
const DisplayAuthButton: React.FC = () => {
	const [userMe, setUserMe] = useState<IUserMe | undefined>(undefined);

	useEffect(() => {
		const fetchData = async () => {
			if (!isAuthenticated()) return;
			try {
				const tmp = await getMe();
				setUserMe(tmp);
			} catch (e) {
				console.error("Erreur chargement profil", e);
			}
		};

		fetchData();
	}, []);

	function disconnect() {
		logout();
		setUserMe(undefined);
	}


	if (isAuthenticated() && userMe) {
		return (
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full py-1 pr-4 pl-1 backdrop-blur-sm shadow-sm transition-all hover:bg-white/10 hover:border-(--color-mountain-meadow) group cursor-default">
					<div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-(--color-mountain-meadow) transition-colors">
						{userMe.image ? (
							<img src={userMe.image} alt={userMe.username} className="w-full h-full object-cover" />
						) : (
							<div className="w-full h-full bg-gray-600 flex items-center justify-center text-xs text-white font-bold">
								{userMe.username.charAt(0).toUpperCase()}
							</div>
						)}
					</div>

					<div className="textStyle-text color-anti-flash-white font-medium text-sm truncate max-w-[150px]">
						{userMe.username}
					</div>
				</div>

				<button
					className="flex items-center justify-center p-2 rounded-full text-(--color-mountain-meadow) hover:bg-red-500/20 hover:text-red-400 transition-all duration-300"
					onClick={disconnect}
					title="Se déconnecter"
				>
					<LogOut size={24} />
				</button>
			</div>
		);
	}

	return (
		<NavLink to="/auth">
			<button title="Se connecter" className="group flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-all duration-300" >
				<UserCircle2 size={32} className="color-mountain-meadow group-hover:scale-110 transition-transform duration-200" />
			</button>
		</NavLink>
	);
};


/* ----- EXPORT ----- */
export default DisplayAuthButton;
