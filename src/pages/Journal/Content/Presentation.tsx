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
import { ChevronDown, DownloadIcon } from "lucide-react";
import React from "react";


/* ----- PROPS ----- */
type JournalPresentationProps = {
	onReadJournal: () => void
	pdfUrl: string
};


/* ----- COMPONENT ----- */
const JournalPresentation: React.FC<JournalPresentationProps> = ({ onReadJournal, pdfUrl }) => {
	const journalHighlights: string[] = [
		"Dossier spécial : La magie des Marchés de Noël",
		"Résumé des différentes News du Saguenay",
		"Vie étudiante : News de l'AEPNI, Club IA et Jeux Vidéo",
		"L'horoscope décalé de la fin de session",
	];

	return (
		<div className="min-h-[80vh] flex items-center py-16 px-4 md:px-8 lg:px-16">
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					<div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ml-12">
						<img src="/img/illustrations/journalCover.png" alt="Image d'un journal vert" className="w-full h-full object-cover" />
					</div>

					<div className="order-1 lg:order-2 flex flex-col gap-8">
						<div className="flex flex-col">
							<span className="textStyle-subtitle uppercase tracking-widest opacity-70">
								Édition Décembre 2025
							</span>
							<div className="textStyle-title color-caribbean-green">
								JOURNAL 52.20
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<div className="textStyle-text">
								L'équipe du Studio 52.20 vous souhaite de bonnes fêtes !<br />
								Au sommaire de ce numéro :
							</div>
							{
								journalHighlights.map((point, index) =>
									<div key={index} className="flex items-start gap-2">
										<span className="color-caribbean-green">▸</span>
										<span className="textStyle-text">{point}</span>
									</div>
								)
							}
						</div>

						<div className="flex flex-col sm:flex-row gap-4 mt-4">
							<button
								onClick={onReadJournal}
								className="px-6 py-2 rounded-full background-bangladesh-green color-anti-flash-white font-bold hover:opacity-90 transition shadow-md flex items-center gap-2 group justify-center sm:justify-start"
							>
								LIRE MAINTENANT
								<ChevronDown className="h-5 w-0 group-hover:animate-bounce group-hover:w-5 transition-all duration-300" />
							</button>
							<a
								href={pdfUrl}
								target="_blank"
								rel="noreferrer"
								download
								className="px-6 py-2 rounded-full border-2 border-(--color-bangladesh-green) hover:bg-(--color-bangladesh-green) color-anti-flash-white font-bold transition shadow-md flex items-center gap-2 group justify-center sm:justify-start"
							>
								TÉLÉCHARGER
								<DownloadIcon className="h-5 w-0 group-hover:animate-bounce group-hover:w-5 transition-all duration-300" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


/* ----- EXPORT ----- */
export default JournalPresentation;
