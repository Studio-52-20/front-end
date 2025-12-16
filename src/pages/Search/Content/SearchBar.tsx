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
import { ArrowRight, ChevronDown, Search, X } from "lucide-react";
import React, { useState } from "react";


/* ----- PROPS ----- */
interface SearchBarProps {
	onSearch: (query: string, filter: string) => void;
	onClear: () => void;
}


/* ----- COMPONENT ----- */
const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onClear }) => {
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("all");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const filterLabels: Record<string, string> = {
		all: "Tout",
		emission: "Émissions",
		serie: "Séries",
		category: "Catégories"
	};

	const options = [
		{ value: "all", label: "Tout" },
		{ value: "emission", label: "Émissions" },
		{ value: "serie", label: "Séries" },
		{ value: "category", label: "Catégories" },
	];

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') onSearch(query, filter);
	};

	const handleSelectFilter = (value: string) => {
		setFilter(value);
		onSearch(query, value);
		setIsDropdownOpen(false);
	};

	return (
		<div className="w-full max-w-3xl flex flex-col items-center gap-8 p-8">

			<div className="text-center flex flex-col gap-2">
				<div className="textStyle-title text-4xl">Que recherchez-vous ?</div>
				<p className="textStyle-text color-anti-flash-white opacity-80">
					Explorez nos émissions, séries et catégories exclusives.
				</p>
			</div>

			<div className="relative z-50 w-full background-dark-green border border-(--color-bangladesh-green) hover:border-(--color-mountain-meadow) focus-within:border-(--color-mountain-meadow) rounded-full p-2 flex items-center shadow-lg hover:scale-110 focus-within:scale-110 gap-2 transition-all">

				<div className="px-4 color-anti-flash-white-o50">
					<Search className="w-5 h-5" />
				</div>

				<input
					type="text"
					className="bg-transparent border-none outline-none color-anti-flash-white w-full placeholder-(--color-anti-flash-white-o50) h-10 text-lg"
					placeholder="Chercher un titre..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={handleKeyDown}
				/>

				<div className={`px-4 ${query === "" ? "color-anti-flash-white-o50" : "color-anti-flash-white"}`}>
					<X className="w-5 h-5" onClick={() => {
						setQuery("");
						onClear();
					}} />
				</div>

				<div className="w-px h-8 background-bangladesh-green"></div>

				<div className="relative">
					<button
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						className="inline-flex items-center justify-center gap-2 color-anti-flash-white px-4 py-2.5 focus:outline-none transition-all"
						type="button"
					>
						{filterLabels[filter]}
						<ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
					</button>

					{isDropdownOpen && (
						<div className="absolute right-0 top-full mt-4 w-44 background-dark-green border border-(--color-bangladesh-green) rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100 origin-top-right">
							<ul className="p-1 text-sm color-anti-flash-white-o75">
								{options.map((opt) => (
									<li key={opt.value} className="py-0.5">
										<button
											onClick={() => handleSelectFilter(opt.value)}
											className={`flex w-full text-left px-4 py-2 rounded-lg hover:bg-(--color-bangladesh-green-o20) hover:text-(--color-anti-flash-white) transition-colors ${filter === opt.value ? 'background-bangladesh-green color-anti-flash-white font-bold' : ''}`}
										>
											{opt.label}
										</button>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<button
					onClick={() => onSearch(query, filter)}
					className="background-bangladesh-green hover:brightness-110 color-anti-flash-white p-3 rounded-full transition-all shrink-0"
				>
					<ArrowRight className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
};


/* ----- EXPORT ----- */
export default SearchBar;
