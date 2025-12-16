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
import Studio5220TextLogo from "@/components/Logo/TextLogo/TextLogo";
import DisplayMember from "@/components/Display/User/Member/DisplayMember";

/* ----- COMPONENT ----- */
const MembersPage: React.FC = () => {
	const teamMembers = GetTeamMemberDatas();

	return (
		<div className="min-h-screen w-full background-dark-green p-4 pt-32 pb-16 relative overflow-hidden">
			<div className="absolute top-[-10%] right-[-10%] w-96 h-96 background-mountain-meadow rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
			<div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 background-mountain-meadow rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

			<div className="max-w-7xl mx-auto mb-16 text-center relative z-10">
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

			<div className="max-w-7xl mx-auto space-y-8 relative z-10">
				{teamMembers.map((member, index) => (
					<DisplayMember key={index} member={member} index={index} />
				))}
			</div>
		</div>
	);
};

export default MembersPage;
