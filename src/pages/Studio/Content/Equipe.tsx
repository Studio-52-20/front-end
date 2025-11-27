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


/* ----- COMPONENT ----- */
const StudioEquipePart: React.FC = () => {
	return (
		<section className="min-h-screen flex flex-col justify-center py-16 px-4 md:px-8 lg:px-16">
			<div className="max-w-7xl mx-auto w-full flex flex-col gap-4">
				<div className="textStyle-title color-caribbean-green text-center">
					L'ÉQUIPE
				</div>

				<div className="overflow-x-auto pb-8 scrollbar-hide">
					<div className="flex gap-6 md:gap-8 w-max">
						{GetTeamMemberDatas().map((member, index) => (
							<div key={index} className="shrink-0 w-72 md:w-80 rounded-lg p-6 border-2 bg-(--color-bangladesh-green) border-(--color-mountain-meadow) flex flex-col gap-6" >
								<div className="flex flex-col gap-2 items-center text-center">
									<div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden bg-(--color-mountain-meadow)">
										<img src={`/img/teamMembers/${member.name.toLowerCase()}.jpeg`} alt={member.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
									</div>
									<div className="textStyle-subtitle color-caribbean-green"> {member.name} </div>
								</div>
								<div className="flex flex-col gap-2 items-center text-center">
									<div className="textStyle-text font-semibold"> {member.role} </div>
									<div className="textStyle-text italic"> "{member.bio}" </div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="text-center textStyle-text italic">
					← Fais défiler pour voir toute l'équipe →
				</div>
			</div>
		</section>
	);
};

export default StudioEquipePart;
