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
import { X, Send, Trash2 } from "lucide-react";
import React from "react";


/* ----- PROPS ----- */
type AddCommentWriteCommentProps = {
	handleClose: () => void;
	handleClear: () => void;
	handleSend: () => void;
	comment: string;
	setComment: (comment: string) => void;
};


/* ----- COMPONENT ----- */
const AddCommentWriteComment: React.FC<AddCommentWriteCommentProps> = ({ handleClear, handleClose, handleSend, comment, setComment }) => {

	return (
		<>
			<div className="flex justify-between items-center p-4 border-b border-(--color-bangladesh-green) background-bangladesh-green-o20">
				<div className="textStyle-subtitle font-bold color-anti-flash-white">
					Nouveau commentaire
				</div>
				<button
					onClick={handleClose}
					className="hover:text-red-400 transition-colors block sm:hidden"
				>
					<X className="w-6 h-6" />
				</button>
			</div>

			<div className="p-6 flex flex-col gap-4">
				<textarea
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					placeholder="Partagez votre avis sur cette émission..."
					className="w-full h-40 bg-black/20 border border-bangladesh-green rounded-xl p-4 color-anti-flash-white placeholder-(--color-anti-flash-white-o50) focus:outline-none focus:border-(--color-mountain-meadow) resize-none transition-colors"
					autoFocus
				/>
			</div>

			<div className="p-4 background-bangladesh-green-o20 border-t border-(--color-bangladesh-green) flex justify-between items-center">

				<button
					onClick={handleClear}
					className="flex items-center gap-2 text-sm hover:text-red-400 transition-colors px-3 py-2 rounded-lg hover:bg-red-400/10"
				>
					<Trash2 className="w-4 h-4" />
					<span className="hidden sm:block">Effacer</span>
				</button>

				<div className="flex gap-3">
					<button
						onClick={handleClose}
						className="px-4 py-2 rounded-lg color-anti-flash-white hover:bg-white/5 transition-colors hidden sm:block"
					>
						Annuler
					</button>
					<button
						onClick={handleSend}
						disabled={!comment.trim()}
						className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold color-anti-flash-white transition-all shadow-md background-mountain-meadow
                                ${comment.trim()
								? 'hover:brightness-110 hover:scale-105'
								: 'bg-gray-600 opacity-50 cursor-not-allowed'
							}
                            `}
					>
						<span className="hidden sm:block">Envoyer</span>
						<Send className="w-4 h-4" />
					</button>
				</div>
			</div>
		</>
	);
};


/* ----- EXPORT ----- */
export default AddCommentWriteComment;
