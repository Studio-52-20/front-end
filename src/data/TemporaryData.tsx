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

import type { EmissionConfig } from "@/type/EmissionConfig";
import type { SerieConfig } from "@/type/SerieConfig";
import { DefaultUserConfig, type UserConfig } from "@/type/UserRoleConfig";


/* ----- DATAS ----- */

const exampleUsers: UserConfig[] = [
	{
		id: 1,
		username: "Nathan",
		avatar: "/example/img/nathan.png",
	},
	{
		id: 2,
		username: "Clement",
		avatar: "/example/img/clement.jpg",
	},
	{
		id: 3,
		username: "Martin",
		avatar: "/example/img/martin.jpg",
	},
	{
		id: 4,
		username: "Romane",
		avatar: "/example/img/romane.jpg",
	},
	{
		id: 5,
		username: "Lucas",
		avatar: "/example/img/lucas.jpg",
	},
];

function getUserById(id: number): UserConfig {
	return exampleUsers.find((user) => user.id === id) || DefaultUserConfig;
}


const exampleSerie: SerieConfig = {
	id: 1,
	name: "L'Echo du Cauchemar",
	description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
	image: "/example/img/echo_du_cauchemar.png",
	emissions: [],
};

function addEmissionToSerie(serie: SerieConfig, emission: EmissionConfig) {
	emission.serie = serie;
	if (!serie.emissions.includes(emission))
		serie.emissions.push(emission);
}

const exampleEmissions: EmissionConfig[] = [
	{
		id: 1,
		name: "Episode 1 - La Génèse des CreepyPastas",
		description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
		audio: "/example/audio/creepypasta_1.MP3",
		date: new Date(),
		image: "/example/img/creepypasta_1.png",
		participants: [
			getUserById(1),
			getUserById(2),
			getUserById(3),
		],
		comments: [
			{
				id: 1,
				user: getUserById(4),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 2,
				user: getUserById(4),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 3,
				user: getUserById(5),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 4,
				user: getUserById(5),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 5,
				user: getUserById(4),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 6,
				user: getUserById(5),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
		],
		serie: null,
	},
	{
		id: 2,
		name: "Episode 2 - SlenderMan",
		description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
		audio: "/example/audio/creepypasta_2.MP3",
		date: new Date(),
		image: "/example/img/creepypasta_2.png",
		participants: [
			getUserById(1),
			getUserById(2),
		],
		comments: [
			{
				id: 1,
				user: getUserById(3),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 2,
				user: getUserById(4),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 3,
				user: getUserById(5),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 4,
				user: getUserById(3),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 5,
				user: getUserById(4),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
			{
				id: 6,
				user: getUserById(5),
				date: new Date(),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
			},
		],
		serie: null,
	},
];
exampleEmissions.forEach((emission) => addEmissionToSerie(exampleSerie, emission));

export function getEmissionById(id: number): EmissionConfig | undefined {
	return exampleEmissions.find((emission => emission.id == id));
}

export function getEmissions(): EmissionConfig[] {
	return exampleEmissions;
}
