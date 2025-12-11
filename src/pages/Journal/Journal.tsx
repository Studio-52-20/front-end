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
import JournalPresentation from "./Content/Presentation";
import JournalPdfReader from "./Content/PdfReader";


/* ----- COMPONENT ----- */
const JournalPage: React.FC = () => {
	const pdfUrl = "/pdf/Journal studio 5220 - UQAC.pdf";

	const scrollToReader = () => {
		const readerSection = document.getElementById('journal-reader');
		if (readerSection) {
			readerSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="flex flex-col min-h-screen">
			<div className="h-28 shrink-0"></div>
			<JournalPresentation onReadJournal={scrollToReader} pdfUrl={pdfUrl} />
			<JournalPdfReader id="journal-reader" pdfUrl={pdfUrl} />
		</div>
	);
};

export default JournalPage;
