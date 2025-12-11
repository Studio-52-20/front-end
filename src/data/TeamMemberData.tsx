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
import type { ITeamMember } from "@/type/TeamMember";


/* ----- DATAS ----- */
const TeamMemberDatas: ITeamMember[] = [
	{
		name: "Clement",
		role: "Président",
		bio: "Celui qui dit oui à tout... sauf quand il dit non.",
		fullBio: "Clement est le capitaine du navire Radio 52.20. Avec son charisme naturel et sa capacité légendaire à dire oui à tout (sauf quand ça l'arrange de dire non), il dirige l'équipe avec brio et une bonne dose d'humour. Passionné par les médias étudiants et toujours partant pour de nouveaux projets, il jongle entre les réunions, les décisions importantes et les cafés en quantité astronomique.",
		image: "clement.jpeg",
		joinDate: "Septembre 2024",
		quote: "Si on ne tente rien, on ne rate rien... mais c'est beaucoup moins drôle !",
		recommendedEmission: "Flash Actu du 01/12/2025",
	},
	{
		name: "Florian",
		role: "Vice-Président",
		bio: "Le vice-président qui n'a rien de vicieux... enfin presque.",
		fullBio: "Florian est le bras droit de Clement, toujours prêt à prendre le relais quand il le faut. Son titre de 'vice-président' pourrait laisser croire qu'il a des vices cachés, mais en réalité, c'est juste un passionné de radio qui adore organiser, planifier et s'assurer que tout roule. Entre deux blagues et une montagne de post-its, il garde l'équipe sur les rails avec le sourire.",
		image: "florian.jpeg",
		joinDate: "Septembre 2024",
		quote: "Vice-président, c'est comme président, mais avec moins de stress... en théorie.",
		recommendedEmission: "Tech News : Les Gadgets de 2026",
	},
	{
		name: "Ethan",
		role: "Secrétaire",
		bio: "Prend des notes... parfois même lisibles.",
		fullBio: "Ethan est celui qui note tout, tout le temps. Enfin presque. Avec son stylo magique et ses carnets mystérieux, il capture l'essence de chaque réunion... du moins ce qu'il arrive à déchiffrer de son écriture. Organisé (à sa manière) et toujours de bonne humeur, il s'assure que personne n'oublie les tâches importantes, même si parfois c'est lui qui les oublie en premier.",
		image: "ethan.jpeg",
		joinDate: "Octobre 2024",
		quote: "J'écris tout, je note tout... maintenant, encore faut-il que je me relise.",
		recommendedEmission: "Histoire du Jour : La Chute du Mur",
	},
	{
		name: "Mattéo",
		role: "Trésorier",
		bio: "Compte l'argent qu'on n'a pas encore.",
		fullBio: "Mattéo est l'homme aux chiffres, le gardien du coffre (virtuel) de Radio 52.20. Armé de son tableur Excel et d'une calculatrice qu'il n'utilise presque jamais, il jongle avec les budgets, les dépenses et les entrées d'argent... qu'on n'a pas encore vraiment. Précis, rigoureux et toujours prêt à expliquer pourquoi on ne peut pas acheter ce micro à 2000€, il garde les finances de la radio sous contrôle.",
		image: "matteo.jpeg",
		joinDate: "Septembre 2024",
		quote: "L'argent ne fait pas le bonheur... mais il aide à payer les factures !",
		recommendedEmission: "Le Point Économie : Inflation",
	},
	{
		name: "Elisa",
		role: "Resp. Journal",
		bio: "Écrit des articles que même elle relit avec surprise.",
		fullBio: "Elisa est la plume de Radio 52.20. Responsable du journal, elle rédige des articles captivants sur les événements du campus, les actualités étudiantes et tout ce qui mérite d'être raconté. Avec son style unique et son sens de l'humour affûté, elle transforme même les sujets les plus ennuyeux en lectures passionnantes. Parfois, elle se relit et se surprend elle-même de son talent.",
		image: "elisa.jpeg",
		joinDate: "Octobre 2024",
		quote: "Écrire, c'est facile. Relire sans sourciller, c'est une autre histoire.",
		recommendedEmission: "Littérature : Le Roman de l'Année",
	},
	{
		name: "Nathan",
		role: "Resp. Monteur",
		bio: "Coupe, colle, et fait semblant de comprendre le montage.",
		fullBio: "Nathan est le magicien du montage. Derrière son écran et ses multiples logiciels, il coupe, colle, synchronise et peaufine chaque émission pour en faire une œuvre d'art sonore. Bon, parfois il clique un peu au hasard, mais le résultat est toujours là ! Passionné par l'audio et les nouvelles technologies, il transforme nos enregistrements bruts en podcasts dignes des plus grandes radios.",
		image: "nathan.jpeg",
		joinDate: "Septembre 2024",
		quote: "Ctrl+Z est mon meilleur ami.",
		recommendedEmission: "Musique Classique et Modernité",
	}
];



/* ----- FUNCTIONS ----- */
function GetTeamMemberDatas(): ITeamMember[] {
	return TeamMemberDatas;
}


/* ----- EXPORTS ----- */
export { GetTeamMemberDatas };