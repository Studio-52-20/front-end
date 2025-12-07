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
import { PlusCircle, X, Send, Trash2 } from "lucide-react";
import React, { useState } from "react";


/* ----- PROPS ----- */
type AddCommentProps = {
	callback: () => void;
};


/* ----- COMPONENT ----- */
const AddComment: React.FC<AddCommentProps> = ({ callback }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [comment, setComment] = useState("");

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleClear = () => {
		setComment("");
	};

	const handleSend = () => {
		if (comment.trim() === "") return;

		console.log("Commentaire envoyé :", comment);

		setComment("");
		setIsOpen(false);
		callback();
	};

	return (
		<>
			<div
				onClick={() => setIsOpen(true)}
				className="rounded-full background-mountain-meadow p-2 hover:brightness-110 transition-all cursor-pointer duration-300 color-anti-flash-white shadow-lg"
			>
				<PlusCircle className="w-6 h-6" />
			</div>

			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">

					<div className="background-dark-green border border-(--color-bangladesh-green) w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">

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
					</div>
				</div>
			)}
		</>
	);
};

export default AddComment;
