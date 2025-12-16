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
import css from "./Loader.module.css";


/* ----- COMPONENT ----- */
const Loader: React.FC = () => {
	return (
		<div className={css.container}>
			<div className={css.plate}>
				<div className={css.black}>
					<div className={css.border}>
						<div className={css.white}>
							<div className={css.center}></div>
						</div>
					</div>
				</div>
			</div>

			<div className={css.player}>
				<div className={css.rect}></div>
				<div className={css.circ}></div>
			</div>
		</div>
	);
};


/* ----- EXPORT ----- */
export default Loader;
