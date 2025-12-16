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
import { AlertCircle } from "lucide-react";
import React from "react";


/* ----- PROPS ----- */
type AddCommentErrorProps = {
	handleClose: () => void;
	resetStatus: () => void;
};


/* ----- COMPONENT ----- */
const AddCommentError: React.FC<AddCommentErrorProps> = ({ handleClose, resetStatus }) => {
	return (
		<div className="flex flex-col items-center justify-center h-80 gap-6 animate-in zoom-in-95 duration-300 p-6 text-center">
			<AlertCircle className="w-16 h-16 text-red-500" />
			<div className="flex flex-col gap-2">
				<h3 className="textStyle-subtitle font-bold color-anti-flash-white">Oups...</h3>
				<p className="color-anti-flash-white opacity-80">Une erreur est survenue, votre commentaire n'a pas pu être reçu.</p>
			</div>
			<div className="flex gap-4">
				<button
					onClick={handleClose}
					className="px-4 py-2 rounded-lg color-anti-flash-white hover:bg-white/5 transition-colors"
				>
					Fermer
				</button>
				<button
					onClick={resetStatus}
					className="px-6 py-2 rounded-lg font-bold color-anti-flash-white bg-red-500 hover:bg-red-600 transition-all shadow-md"
				>
					Réessayer
				</button>
			</div>
		</div>
	);
};


/* ----- EXPORT ----- */
export default AddCommentError;
