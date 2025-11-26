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
import DisplayComment from "@/components/Display/Comment/Comment";
import DisplayUserHover from "@/components/Display/User/Hover/DisplayUserHover";
import { getEmissionById } from "@/data/TemporaryData";
import React from "react";
import NotFoundPage from "../NotFound/NotFoundPage";
import { useParams } from "react-router-dom";


/* ----- COMPONENT ----- */
const EmissionPage: React.FC = () => {
	const { emissionId } = useParams();
	const id = Number(emissionId);
	const emission = getEmissionById(id);
	if (!emission) return <NotFoundPage />;

	return (
		<div className="flex flex-col h-screen">
			<div className="h-28 shrink-0"></div>
			<div className="flex flex-col lg:flex-row justify-center items-center grow p-8 gap-8 overflow-y-auto">
				<div className="background-bangladesh-green lg:w-1/2 w-full lg:h-full h-1/2 rounded-2xl flex lg:flex-col flex-row p-8 gap-8">
					<div className="p-8 flex justify-center items-center">
						<img src={emission.image} alt={emission.name} className="lg:w-full h-full aspect-square object-cover rounded-2xl" />
					</div>
					<div className="textStyle-subtitle color-anti-flash-white">
						{emission.name}
					</div>
					{/* <AudioPlayer src={emission.audio} /> */}
				</div>

				<div className="background-bangladesh-green w-full h-full rounded-2xl flex flex-col p-12 gap-8 overflow-y-auto">
					<div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Participants</div>
						<div className="flex flex-row">
							{emission.participants.map((participant) => <DisplayUserHover key={participant.id} user={participant} />)}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Description</div>
						<div className="textStyle-text color-anti-flash-white">{emission.description}</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Comments</div>
						<div className="flex flex-col gap-4 pr-2">
							{emission.comments.map((comment) => <DisplayComment key={comment.id} comment={comment} />)}
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default EmissionPage;
