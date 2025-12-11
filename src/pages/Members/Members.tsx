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
import { GetTeamMemberDatas } from "@/data/TeamMemberData";
import { User } from "lucide-react";
import Studio5220TextLogo from "@/components/Logo/TextLogo/TextLogo";

/* ----- COMPONENT ----- */
const MembersPage: React.FC = () => {
	const teamMembers = GetTeamMemberDatas();

	return (
		<div className="min-h-screen w-full background-dark-green p-4 pt-32 relative overflow-hidden">
			{/* Blob décoratif */}
			<div className="absolute top-[-10%] right-[-10%] w-96 h-96 background-mountain-meadow rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
			<div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 background-mountain-meadow rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

			{/* Header */}
			<div className="max-w-7xl mx-auto mb-12 text-center relative z-10">
				<div className="flex justify-center mb-4">
					<Studio5220TextLogo color="var(--color-mountain-meadow)" size={0.8} />
				</div>
				<h1 className="text-5xl font-bold text-white mb-4">
					Notre Équipe
				</h1>
				<p className="text-gray-400 text-lg max-w-2xl mx-auto">
					Découvrez les personnes passionnées qui font vivre Radio 52.20
				</p>
			</div>

			{/* Grid des membres */}
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
				{teamMembers.map((member, index) => (
					<div
						key={member.name}
						className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						{/* Image du membre */}
						<div className="relative mb-6">
							<div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/10 group-hover:border-green-500/50 transition-all duration-300 shadow-lg">
								<img
									src={`/img/teamMembers/${member.image}`}
									alt={member.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
									onError={(e) => {
										// Fallback si l'image n'existe pas
										e.currentTarget.style.display = 'none';
										e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-black/30 flex items-center justify-center"><svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3-7 8-7s8 3 8 7"/></svg></div>';
									}}
								/>
							</div>
							{/* Badge rôle */}
							<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 background-mountain-meadow text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
								{member.role}
							</div>
						</div>

						{/* Infos du membre */}
						<div className="text-center mt-8">
							<h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
								{member.name}
							</h3>
							<p className="text-gray-400 text-sm italic leading-relaxed">
								"{member.bio}"
							</p>
						</div>

						{/* Effet de brillance au hover */}
						<div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:via-green-500/10 group-hover:to-green-500/5 rounded-3xl transition-all duration-300 pointer-events-none"></div>
					</div>
				))}
			</div>

			{/* Footer de la page */}
			<div className="max-w-7xl mx-auto mt-16 text-center relative z-10">
				<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
					<h2 className="text-2xl font-bold text-white mb-4">
						Envie de nous rejoindre ?
					</h2>
					<p className="text-gray-400 mb-6">
						Radio 52.20 est toujours à la recherche de nouveaux talents passionnés !
					</p>
					<div className="flex items-center justify-center gap-2 text-green-400 font-semibold">
						<User size={20} />
						<span>Contactez-nous pour plus d'informations</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MembersPage;