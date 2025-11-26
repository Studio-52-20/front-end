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
import { getEmissions } from "@/data/TemporaryData";
import React from "react";
import { Link } from "react-router-dom";

/* ----- COMPONENT ----- */
const SearchPage: React.FC = () => {
	const emissions = getEmissions();

	return (
		<div className="flex flex-col gap-8 p-8 min-h-screen">
			<h1 className="textStyle-title text-center">All Emissions</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{emissions.map((emission) => (
					<Link
						key={emission.id}
						to={`/emission/${emission.id}`}
						className="block bg-background-bangladesh-green rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-200"
					>
						<img
							src={emission.image}
							alt={emission.name}
							className="w-full aspect-square object-cover"
						/>

						<div className="p-4 flex flex-col gap-2">
							<div className="textStyle-subtitle color-anti-flash-white truncate">
								{emission.name}
							</div>
							<div className="textStyle-text color-anti-flash-white line-clamp-3">
								{emission.description}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SearchPage;
