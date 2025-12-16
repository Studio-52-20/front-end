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
import Loader from "@/components/Layout/Loader/Loader";
import { fetchPost } from "@/services/fetch";
import { PlusCircle, X, Send, Trash2, CheckCircle, AlertCircle } from "lucide-react";
import React, { useState } from "react";


/* ----- PROPS ----- */
type AddCommentProps = {
	callback: () => void;
	emissionId: string;
};


/* ----- TYPES ----- */
type StatusType = 'idle' | 'success' | 'error';


/* ----- COMPONENT ----- */
const AddComment: React.FC<AddCommentProps> = ({ callback, emissionId }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [comment, setComment] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState<StatusType>('idle');

	const handleClose = () => {
		setIsOpen(false);
		setTimeout(() => {
			setStatus('idle');
			setComment("");
			setIsLoading(false);
		}, 300);
	};

	const handleClear = () => {
		setComment("");
	};

	const handleSend = async () => {
		if (comment.trim() === "") return;

		setIsLoading(true);

		const payload = new FormData();
		payload.append("contenu", comment);
		payload.append("emissionId", emissionId);
		payload.append("userId", "10000000-0000-0000-0000-000000000001");

		try {
			const response = await fetchPost("commentaires", payload, "formData");
			if (response.status < 200 || response.status >= 300) {
				const errorData = await response.json();
				console.error("Erreur API:", errorData);
				throw new Error(`Erreur ${response.status}`);
			}

			setStatus('success');
			setComment("");
			callback();
		} catch (error) {
			console.error(error);
			setStatus('error');
		} finally {
			setIsLoading(false);
		}
	};

	const renderContent = () => {

		if (isLoading) {
			return (
				<div className="flex flex-col items-center justify-center h-80 gap-4 animate-in fade-in duration-300">
					<Loader />
					<p className="textStyle-subtitle color-anti-flash-white">Envoi en cours...</p>
				</div>
			);
		}

		if (status === 'success') {
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
		}

		if (status === 'error') {
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
							onClick={() => setStatus('idle')} // On retourne au formulaire sans effacer le texte (si tu veux)
							className="px-6 py-2 rounded-lg font-bold color-anti-flash-white bg-red-500 hover:bg-red-600 transition-all shadow-md"
						>
							Réessayer
						</button>
					</div>
				</div>
			);
		}

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
						{renderContent()}
					</div>
				</div>
			)}
		</>
	);
};

export default AddComment;
