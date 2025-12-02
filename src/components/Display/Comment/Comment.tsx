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
import type { IComment } from "@/type/Comment";
import React from "react";


/* ----- PROPS ----- */
type DisplayCommentProps = {
	comment: IComment;
};


/* ----- COMPONENT ----- */
const DisplayComment: React.FC<DisplayCommentProps> = ({ comment }) => {
	return (
		<div className="flex flex-col gap-1 p-4 background-mountain-meadow rounded-xl">
			<div className="flex flex-row items-center gap-4">
				<img src={comment.user.avatar} alt={comment.user.username} className="w-10 h-10 rounded-full object-cover" />
				<div className="textStyle-subtitle color-anti-flash-white">{comment.user.username}</div>
				<div className="textStyle-caption color-anti-flash-white">{comment.date.toLocaleDateString()}</div>
			</div>
			<div className="textStyle-text color-anti-flash-white">{comment.content}</div>
		</div>
	);
};

export default DisplayComment;
