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
import { DownloadIcon } from "lucide-react";
import React from "react";


/* ----- PROPS ----- */
type JournalPdfReaderProps = {
	id: string
	pdfUrl: string
};


/* ----- COMPONENT ----- */
const JournalPdfReader: React.FC<JournalPdfReaderProps> = ({ id, pdfUrl }) => {
	return (
		<div id={id} className="px-4 md:px-8 lg:px-16 pb-16">
			<div className="max-w-7xl mx-auto w-full">
				<div className="background-bangladesh-green rounded-2xl p-4 md:p-8 flex flex-col gap-6 shadow-2xl">

					<div className="flex justify-between items-center border-b border-white/10 pb-4">
						<div className="textStyle-title color-anti-flash-white">
							Lecture en cours
						</div>
						<a href={pdfUrl} target="_blank" rel="noreferrer" className="hidden md:block text-sm color-anti-flash-white opacity-60 hover:opacity-100 underline">
							Ouvrir dans un nouvel onglet
						</a>
					</div>

					<div className="display-laptop-mode w-full h-[85vh] rounded-xl overflow-hidden">
						<object
							data={pdfUrl}
							type="application/pdf"
							className="w-full h-full"
						>
							<div className="flex flex-col items-center justify-center h-full text-gray-800 p-10 text-center">
								<p className="text-lg font-bold mb-2">Impossible d'afficher le PDF directement.</p>
								<a
									href={pdfUrl}
									className="px-6 py-2 background-bangladesh-green color-anti-flash-white rounded-full mt-4"
									download
									target="_blank"
									rel="noreferrer"
								>
									Télécharger le fichier
								</a>
							</div>
						</object>
					</div>

					<div className="display-mobile-mode flex flex-col items-center justify-center py-12 text-center">
						<p className="textStyle-text color-anti-flash-white mb-6 px-4">
							Pour une meilleure expérience de lecture sur votre téléphone, nous vous recommandons de télécharger le journal.
						</p>
						<a
							href={pdfUrl}
							target="_blank"
							rel="noreferrer"
							download
							className="px-8 py-4 bg-white text-(--color-bangladesh-green) font-bold rounded-full shadow-lg flex items-center justify-center gap-2"
						>
							<DownloadIcon className="h-5 w-5" />
							Télécharger le PDF
						</a>
					</div>

					<div className="textStyle-text color-anti-flash-white text-center italic text-sm mt-2">
						Vous avez aimé ce numéro ? N'hésitez pas à nous envoyer vos retours !
					</div>

				</div>
			</div>
		</div>
	);
};


/* ----- EXPORT ----- */
export default JournalPdfReader;
