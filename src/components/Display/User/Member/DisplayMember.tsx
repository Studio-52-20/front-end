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
import type { IMember } from "@/type/User";
import { Calendar, Quote, Radio } from "lucide-react";
import React from "react";


/* ----- PROPS ----- */
type DisplayMemberProps = {
	member: IMember;
	index: number;
};


/* ----- COMPONENT ----- */
const DisplayMember: React.FC<DisplayMemberProps> = ({ member, index }) => {
	return (
		<div
			key={member.name}
			className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:bg-white/10 transition-all duration-300 overflow-hidden group"
			style={{ animationDelay: `${index * 0.1}s` }}
		>
			<div className="flex flex-col md:flex-row gap-8 p-8">
				<div className="shrink-0 flex flex-col items-center md:items-start">
					<div className="relative">
						<div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-green-500/50 transition-all duration-300 shadow-2xl">
							<img
								src={`/img/teamMembers/${member.image}`}
								alt={member.name}
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
								onError={(e) => {
									e.currentTarget.style.display = 'none';
									e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-black/30 flex items-center justify-center"><svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3-7 8-7s8 3 8 7"/></svg></div>';
								}}
							/>
						</div>
						<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 background-mountain-meadow text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
							{member.role}
						</div>
					</div>
				</div>

				<div className="flex-1 flex flex-col justify-center space-y-4">
					<h2 className="text-4xl font-bold text-white">
						{member.name}
					</h2>

					<div className="flex items-center gap-2 text-gray-400">
						<Calendar size={18} />
						<span className="text-sm">Membre depuis {member.joinDate}</span>
					</div>

					<p className="text-gray-300 leading-relaxed text-base">
						{member.fullBio}
					</p>

					<div className="bg-black/20 border border-white/10 rounded-xl p-4">
						<div className="flex items-center gap-3">
							<Radio className="text-green-400 shrink-0" size={20} />
							<div>
								<p className="text-gray-400 text-xs mb-1">Émission conseillée par {member.name}</p>
								<p className="text-white font-semibold">{member.recommendedEmission}</p>
							</div>
						</div>
					</div>

					<div className="bg-black/20 border-l-4 border-green-500 rounded-r-xl p-4 mt-4">
						<div className="flex gap-3">
							<Quote className="text-green-400 shrink-0" size={24} />
							<p className="text-white italic text-sm leading-relaxed">
								{member.quote}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute inset-0 bg-linear-to-br from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:via-green-500/10 group-hover:to-green-500/5 transition-all duration-300 pointer-events-none"></div>
		</div>
	);
};


/* ----- EXPORT ----- */
export default DisplayMember;
