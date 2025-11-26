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
import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";


/* ----- COMPONENT ----- */
const EmissionPage: React.FC = () => {
	const { emissionId } = useParams();
	const id = Number(emissionId);
	const emission = getEmissionById(id);
	if (!emission) return <NotFoundPage />;

	return (
		<div className="flex flex-col min-h-screen">
			<div className="h-28 shrink-0"></div>

			<div className="flex flex-col xl:flex-row grow p-8 gap-8 xl:h-[calc(100vh-7rem)]">
				<div className="background-bangladesh-green  rounded-2xl p-8 lg:p-12 flex flex-col gap-6 xl:flex-col lg:flex-row w-full xl:w-1/3  shrink-0">
					<div className="w-full flex justify-center p-8">
						<img src={emission.image} alt={emission.name} className="w-[50vw] max-w-[350px] aspect-square object-cover rounded-2xl" />
					</div>

					<div className="flex flex-col gap-4 w-full justify-center items-center">
						<div className="textStyle-subtitle color-anti-flash-white text-center">
							{emission.name}
						</div>

						<div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
							<AudioPlayer src={emission.audio} />
						</div>
					</div>
				</div>

				<div className="background-bangladesh-green rounded-2xl p-8 flex flex-col gap-10 w-full xl:w-2/3 overflow-y-auto xl:overflow-y-auto">
					<div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Participants</div>
						<div className="flex flex-row flex-wrap gap-2">
							{emission.participants.map((participant) => (
								<DisplayUserHover key={participant.id} user={participant} />
							))}
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Description</div>
						<div className="textStyle-text color-anti-flash-white">{emission.description}</div>
					</div>

					<div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Comments</div>
						<div className="flex flex-col gap-4">
							{emission.comments.map((comment) => (
								<DisplayComment key={comment.id} comment={comment} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmissionPage;
