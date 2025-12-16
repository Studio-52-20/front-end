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
import { CheckCircle } from "lucide-react";
import React from "react";


/* ----- PROPS ----- */
type AddCommentSuccessProps = {
	handleClose: () => void;
};


/* ----- COMPONENT ----- */
const AddCommentSuccess: React.FC<AddCommentSuccessProps> = ({ handleClose }) => {
	return (
		<div className="flex flex-col items-center justify-center h-80 gap-6 animate-in zoom-in-95 duration-300 p-6 text-center">
			<CheckCircle className="w-16 h-16 color-mountain-meadow" />
			<div className="flex flex-col gap-2">
				<h3 className="textStyle-subtitle font-bold color-anti-flash-white">Merci !</h3>
				<p className="color-anti-flash-white opacity-80">Nous avons bien ajouté votre commentaire.</p>
			</div>
			<button
				onClick={handleClose}
				className="px-6 py-2 rounded-lg font-bold color-anti-flash-white background-mountain-meadow hover:brightness-110 transition-all shadow-md"
			>
				Super !
			</button>
		</div>
	);
};


/* ----- EXPORT ----- */
export default AddCommentSuccess;
