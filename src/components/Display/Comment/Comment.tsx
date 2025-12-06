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
import { getUserById } from "@/store/UserStore";
import type { IComment } from "@/type/Comment";
import type { IUser } from "@/type/User";
import React, { useEffect, useState } from "react";


/* ----- PROPS ----- */
type DisplayCommentProps = {
	comment: IComment;
};


/* ----- COMPONENT ----- */
const DisplayComment: React.FC<DisplayCommentProps> = ({ comment }) => {
	const [user, setUser] = useState<IUser | undefined>(undefined);

	useEffect(() => {
		const fetchData = async () => {
			setUser(await getUserById(comment.user));
		};
		fetchData();
	}, []);

	if (!user) return;
	return (
		<div className="flex flex-col gap-1 p-4 background-mountain-meadow rounded-xl">
			<div className="flex flex-row items-center gap-4">
				<img src={user.image} alt={user.username} className="w-10 h-10 rounded-full object-cover" />
				<div className="textStyle-subtitle color-anti-flash-white">{user.username}</div>
				<div className="textStyle-caption color-anti-flash-white">{comment.date.toLocaleDateString()}</div>
			</div>
			<div className="textStyle-text color-anti-flash-white">{comment.content}</div>
		</div>
	);
};

export default DisplayComment;
