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
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import AddCommentWriteComment from "@/components/Display/Comment/AddComment/WriteComment";
import AddCommentSuccess from "@/components/Display/Comment/AddComment/Success";
import AddCommentError from "@/components/Display/Comment/AddComment/Error";
import AddCommentLoading from "./Loading";
import { sendComment } from "@/services/comment";


/* ----- PROPS ----- */
type AddCommentProps = {
	callback: () => void;
	emissionId: string;
};


/* ----- COMPONENT ----- */
const AddComment: React.FC<AddCommentProps> = ({ callback, emissionId }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [comment, setComment] = useState("");
	const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

	const handleClose = () => {
		setIsOpen(false);
		setTimeout(() => {
			setStatus('idle');
			setComment("");
		}, 300);
	};

	const handleClear = () => {
		setComment("");
	};

	const handleSend = async () => {
		setStatus('loading');

		const success = await sendComment(comment, emissionId);
		if (!success) {
			setStatus('error');
			return;
		}

		setStatus('success');
		setComment("");
		callback();
	};

	const renderContent = () => {
		if (status === 'loading') return <AddCommentLoading />;
		if (status === 'error') return <AddCommentError handleClose={handleClose} resetStatus={() => setStatus('idle')} />;
		if (status === 'success') return <AddCommentSuccess handleClose={handleClose} />;
		return (
			<AddCommentWriteComment
				handleClose={handleClose}
				handleClear={handleClear}
				handleSend={handleSend}
				comment={comment}
				setComment={setComment}
			/>
		)
	};

	return (
		<>
			<div onClick={() => setIsOpen(true)} className="rounded-full background-mountain-meadow p-2 hover:brightness-110 transition-all cursor-pointer duration-300 color-anti-flash-white shadow-lg">
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


/* ----- EXPORT ----- */
export default AddComment;
