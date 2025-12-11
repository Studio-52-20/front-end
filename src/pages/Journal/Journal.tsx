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

/* ----- COMPONENT ----- */
const JournalPage: React.FC = () => {
	const pdfUrl = "/pdf/Journal studio 5220 - UQAC.pdf";

	const journalHighlights: string[] = [
		"Dossier spécial : La magie des Marchés de Noël",
		"Résumé des différentes News du Saguenay",
		"Vie étudiante : News de l'AEPNI, Club IA et Jeux Vidéo",
		"L'horoscope décalé de la fin de session",
	];

	const scrollToReader = () => {
		const readerSection = document.getElementById('journal-reader');
		if (readerSection) {
			readerSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="flex flex-col min-h-screen">
			<div className="h-28 shrink-0 display-mobile-mode"></div>

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
									onClick={scrollToReader}
									className="px-8 py-3 rounded-full background-bangladesh-green text-white font-bold hover:opacity-90 transition shadow-md"
								>
									LIRE MAINTENANT ↓
								</button>
								<a
									href={pdfUrl}
									download="Journal_5220_Decembre.pdf"
									className="px-8 py-3 rounded-full border-2 border-[#1CA9C9] color-caribbean-green font-bold hover:bg-[#1CA9C9] hover:text-white transition"
								>
									TÉLÉCHARGER
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="journal-reader" className="px-4 md:px-8 lg:px-16 pb-16">
				<div className="max-w-7xl mx-auto w-full">
					<div className="background-bangladesh-green rounded-2xl p-4 md:p-8 flex flex-col gap-6 shadow-2xl">

						<div className="flex justify-between items-center border-b border-white/10 pb-4">
							<div className="textStyle-title color-anti-flash-white">
								Lecture en cours
							</div>
							<a href={pdfUrl} target="_blank" rel="noreferrer" className="text-sm color-anti-flash-white opacity-60 hover:opacity-100 underline">
								Ouvrir dans un nouvel onglet
							</a>
						</div>

						<div className="w-full h-[85vh] bg-white/90 rounded-xl overflow-hidden">
							<object
								data={pdfUrl}
								type="application/pdf"
								className="w-full h-full"
							>
								<div className="flex flex-col items-center justify-center h-full text-gray-800 p-10 text-center">
									<p className="text-lg font-bold mb-2">Oups !</p>
									<p className="mb-4">Votre navigateur ne peut pas afficher le PDF ici.</p>
									<a
										href={pdfUrl}
										className="px-6 py-2 background-bangladesh-green text-white rounded-full"
										download
									>
										Télécharger le fichier
									</a>
								</div>
							</object>
						</div>

						<div className="textStyle-text color-anti-flash-white text-center italic text-sm mt-2">
							Vous avez aimé ce numéro ? N'hésitez pas à nous envoyer vos retours !
						</div>

					</div>
				</div>
			</div>

		</div>
	);
};

export default JournalPage;
