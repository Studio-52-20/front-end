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
import DisplayComment from "@/components/Display/Comment/DisplayComment";
import DisplayUserHover from "@/components/Display/User/Hover/DisplayUserHover";
import React, { useEffect, useState } from "react";
import NotFoundPage from "../NotFound/NotFoundPage";
import { useParams } from "react-router-dom";
import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import { getEmissionById } from "@/store/EmissionStore";
import type { IEmission } from "@/type/Emission";
import type { IUser } from "@/type/User";
import type { IComment } from "@/type/Comment";
import type { IEmissionList } from "@/type/EmissionList";
import { getSerieById } from "@/store/SerieStore";
import { getUsersByIds } from "@/store/UserStore";
import { getCommentsByIds } from "@/store/CommentStore";
import Loader from "@/components/Layout/Loader/Loader";
import AddComment from "@/components/Display/Comment/AddComment/AddComment";


/* ----- COMPONENT ----- */
const EmissionPage: React.FC = () => {
	const [emission, setEmission] = useState<IEmission | undefined>(undefined);
	const [participants, setParticipants] = useState<IUser[]>([]);
	const [comments, setComments] = useState<IComment[]>([]);
	const [serie, setSerie] = useState<IEmissionList | undefined>(undefined);
	const [loading, setLoading] = useState(true);
	const { emissionId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			const tmp = await getEmissionById(emissionId ?? "");

			if (!tmp) {
				setEmission(undefined);
				setLoading(false);
				return;
			}

			const [serieRes, participantsRes, commentsRes] = await Promise.all([
				tmp.serie ? getSerieById(tmp.serie) : Promise.resolve(undefined),
				tmp.participants ? getUsersByIds(tmp.participants) : Promise.resolve([]),
				tmp.comments ? getCommentsByIds(tmp.comments) : Promise.resolve([]),
			]);

			setEmission(tmp);
			setSerie(serieRes);
			setParticipants(participantsRes);
			setComments(commentsRes);

			setLoading(false);
		};

		fetchData();
	}, [emissionId]);

	async function refreshComments() {
		window.location.reload();
	}


	if (loading) {
		return <div className="flex justify-center items-center h-screen textStyle-title">
			<Loader />
		</div>
	}

	if (!emission) return <NotFoundPage />;

	return (
		<div className="flex flex-col min-h-screen">
			<div className="h-28 shrink-0"></div>

			<div className="flex flex-col xl:flex-row grow p-8 gap-8 xl:h-[calc(100vh-7rem)]">
				<div className="background-bangladesh-green rounded-2xl p-8 flex flex-col gap-6 xl:flex-col xl:justify-around lg:flex-row w-full xl:w-1/3  shrink-0">
					<div className="w-full flex justify-center">
						<img src={emission.image} alt={emission.title} className="w-[50vw] max-w-[350px] aspect-square object-cover rounded-2xl" />
					</div>

					<div className="flex flex-col gap-2 w-full justify-center items-center">
						<div className="textStyle-subtitle color-anti-flash-white text-center">
							{emission.title}
						</div>

						<div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
							<AudioPlayer src={emission.audio} />
						</div>
					</div>
				</div>

				<div className="background-bangladesh-green rounded-2xl p-8 flex flex-col gap-10 w-full xl:w-2/3 overflow-y-auto xl:overflow-y-auto">
					<div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Participants</div>
						{participants.length > 0 ?
							<div className="flex flex-row flex-wrap">
								{participants.map((participant) => (
									<DisplayUserHover key={participant.id} user={participant} />
								))}
							</div>
							:
							<div className="textStyle-subtitle color-anti-flash-white"> No users.</div>
						}
					</div>

					<div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Description</div>
						<div className="textStyle-text color-anti-flash-white">{emission.description}</div>
					</div>

					{serie && <div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Serie</div>
						<div className="textStyle-text color-anti-flash-white">{serie.name}</div>
					</div>}

					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-center">
							<div className="textStyle-title color-anti-flash-white">Comments</div>
							<AddComment callback={refreshComments} emissionId={emission.id} />
						</div>
						{comments.length > 0 ?
							<div className="flex flex-col gap-4">
								{comments.map((comment) => (
									<DisplayComment key={comment.id} comment={comment} />
								))}
							</div>
							:
							<div className="textStyle-subtitle color-anti-flash-white"> No comments.</div>
						}
					</div>
				</div>
			</div>
		</div>
	);
};


/* ----- EXPORT ----- */
export default EmissionPage;
