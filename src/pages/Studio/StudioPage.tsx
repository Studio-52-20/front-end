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
import StudioPresentationPart from "./Content/Presentation";
import StudioInvitationParticipationPart from "./Content/InvitationParticipation";
import StudioNousEcouterPart from "./Content/NousEcouter";
import StudioEquipePart from "./Content/Equipe";


/* ----- COMPONENT ----- */
const StudioPage: React.FC = () => {
	return (
		<div>
			<StudioPresentationPart />
			<StudioNousEcouterPart />
			<StudioInvitationParticipationPart />
			<StudioEquipePart />
		</div >
	);
};

export default StudioPage;
