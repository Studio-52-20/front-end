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
import type { EmissionConfig } from "@/type/EmissionConfig";
import type { SerieConfig } from "@/type/SerieConfig";
import React from "react";


/* ----- COMPONENT ----- */
const EmissionPage: React.FC = () => {
	const exampleSerie: SerieConfig = {
		id: 1,
		name: "L'Echo du Cauchemar",
		description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
		image: "example/img/echo_du_cauchemar.png",
		emissions: [],
	};

	const exampleEmission: EmissionConfig = {
		id: 1,
		name: "Episode 1 - La Génèse des CreepyPastas",
		description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
		audio: "example/audio/creepypasta_1.MP3",
		date: new Date(),
		image: "/example/img/creepypasta_1.png",
		participants: [
			{
				id: 1,
				username: "Nathan",
				avatar: "example/img/nathan.png",
			},
			{
				id: 2,
				username: "Clement",
				avatar: "example/img/clement.jpg",
			},
			{
				id: 3,
				username: "Martin",
				avatar: "example/img/martin.jpg",
			},
		],
		comments: [
			{
				id: 1,
				user: {
					id: 4,
					username: "Romane",
					avatar: "example/img/romane.jpg",
				},
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 1,
				user: {
					id: 4,
					username: "Romane",
					avatar: "example/img/romane.jpg",
				},
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 1,
				user: {
					id: 4,
					username: "Lucas",
					avatar: "example/img/lucas.jpg",
				},
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 1,
				user: {
					id: 4,
					username: "Lucas",
					avatar: "example/img/lucas.jpg",
				},
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 1,
				user: {
					id: 4,
					username: "Romane",
					avatar: "example/img/romane.jpg",
				},
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 1,
				user: {
					id: 4,
					username: "Lucas",
					avatar: "example/img/lucas.jpg",
				},
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
		],
		serie: exampleSerie,
	};
	exampleSerie.emissions.push(exampleEmission);

	return (
		<div className="flex flex-col h-screen">
			<div className="h-28 shrink-0"></div>
			<div className="flex flex-col lg:flex-row justify-center items-center grow p-8 gap-8 overflow-y-auto">
				<div className="background-bangladesh-green lg:w-1/2 w-full lg:h-full h-1/2 rounded-2xl flex lg:flex-col flex-row p-8 gap-8">
					<div className="p-8 flex justify-center items-center">
						<img src={exampleEmission.image} alt={exampleEmission.name} className="lg:w-full h-full aspect-square object-cover rounded-2xl" />
					</div>
					<div className="textStyle-subtitle color-anti-flash-white">
						{exampleEmission.name}
					</div>
					{/* <AudioPlayer src={exampleEmission.audio} /> */}
				</div>

				<div className="background-bangladesh-green w-full h-full rounded-2xl flex flex-col p-12 gap-8 overflow-y-auto">
					<div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Participants</div>
						<div className="flex flex-row">
							{exampleEmission.participants.map((participant) => <DisplayUserHover key={participant.id} user={participant} />)}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Description</div>
						<div className="textStyle-text color-anti-flash-white">{exampleEmission.description}</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="textStyle-title color-anti-flash-white">Comments</div>
						<div className="flex flex-col gap-4 pr-2">
							{exampleEmission.comments.map((comment) => <DisplayComment key={comment.id} comment={comment} />)}
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default EmissionPage;
