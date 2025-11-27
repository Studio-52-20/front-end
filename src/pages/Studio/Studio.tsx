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


/* ----- COMPONENT ----- */
const StudioPage: React.FC = () => {
	const teamMembers = [
		{
			name: "Clement",
			role: "Président",
			bio: "Celui qui dit oui à tout... sauf quand il dit non.",
			image: "/img/clement.jpeg"
		},
		{
			name: "Florian",
			role: "Vice-Président",
			bio: "Le vice-président qui n'a rien de vicieux... enfin presque.",
			image: "/img/florian.jpeg"
		},
		{
			name: "Ethan",
			role: "Secrétaire",
			bio: "Prend des notes... parfois même lisibles.",
			image: "/img/ethan.png"
		},
		{
			name: "Mattéo",
			role: "Trésorier",
			bio: "Compte l'argent qu'on n'a pas encore.",
			image: "/img/matteo.jpeg"
		},
		{
			name: "Elisa",
			role: "Resp. Journal",
			bio: "Écrit des articles que même elle relit avec surprise.",
			image: "/img/elisa.jpeg"
		},
		{
			name: "Nathan",
			role: "Resp. Monteur",
			bio: "Coupe, colle, et fait semblant de comprendre le montage.",
			image: "/img/nathan.jpeg"
		}
	];

	return (
		<div style={{ marginTop: '80px' }}>

			<div
				className="fixed top-0 left-0 right-0 pointer-events-none z-40"
				style={{
					height: '160px',
					background: 'linear-gradient(to bottom, var(--color-dark-green) 60%, transparent)'
				}}
			/>

			{/* ------------------------ C'EST QUOI ? ------------------------  */}
			<section className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16">
				<div className="max-w-7xl mx-auto w-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

						{/* ------ IMAGE ------  */}
						<div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ml-12">
							<img
								src="/img/tableDeMixage.png"
								alt="Image d'une table de mixage verte"
								className="w-full h-full object-cover"
							/>
						</div>

						{/* ------ TEXTE ------  */}
						<div className="order-1 lg:order-2">
							<h2 className={`textStyle-title mb-6 color-caribbean-green`}>
								C'EST QUOI ?
							</h2>
							<p className="text-lg md:text-xl leading-relaxed mb-4">
								Une radio chill où :
							</p>
							<ul className="space-y-3 text-base md:text-lg">
								<li className="flex items-start">
									<span className={`mr-3 text-xl color-caribbean-green`}>▸</span>
									<span>on parle de vie étudiante (sans se prendre trop au sérieux)</span>
								</li>
								<li className="flex items-start">
									<span className={`mr-3 text-xl color-caribbean-green`}>▸</span>
									<span>on découvre des projets d'étudiants</span>
								</li>
								<li className="flex items-start">
									<span className={`mr-3 text-xl color-caribbean-green`}>▸</span>
									<span>on invite des profs, artistes et passionnés</span>
								</li>
								<li className="flex items-start">
									<span className={`mr-3 text-xl color-caribbean-green`}>▸</span>
									<span>on diffuse des émissions et des podcasts 100% made in UQAC</span>
								</li>
							</ul>
							<p className="mt-6 text-base md:text-lg italic opacity-90">
								Bref, un espace où chacun peut prendre le micro et raconter quelque chose.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ------------------------ OU NOUS ECOUTER ? ------------------------  */}
			<section className={`min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16 bg-(--color-dark-green-o50)`}>
				<div className="max-w-7xl mx-auto w-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

						{/* ------ TEXTE ------  */}
						<div>
							<h2 className={`textStyle-title mb-6 color-caribbean-green`}>
								OÙ NOUS ÉCOUTER ?
							</h2>

							<p className="text-lg md:text-xl leading-relaxed italic mb-6">
								Nos émissions sont déjà en ligne ! <br />
								Tu peux nous écouter sur Spotify ou directement ICI <br />
								(va dans la section Search) <br />
								Choisis ton support et profite de nos podcasts.
							</p>

							<p className="text-base md:text-lg leading-relaxed">
								Suis-nous pour ne rien manquer 👇
							</p>

							{/* --- HYPERLIENS ---  */}
							{/* Instagram  */}
							<div className="mt-8 space-y-4">
								<a href="https://www.instagram.com/studio52.20/"
									target="_blank"
									rel="noopener noreferrer"
									className={`flex items-center gap-3 text-lg md:text-xl hover:opacity-80 transition-opacity color-caribbean-green`}>
									<img
										src="/svg/instagramIcon.svg"
										alt="Instagram"
										className="w-6 h-6"
									/>
									Instagram : @studio52.20
								</a>
								{/* Spotify */}
								<a href="https://open.spotify.com/show/4FAq7xczKaPkyk5q2ZfeHA"
									target="_blank"
									rel="noopener noreferrer"
									className={`flex items-center gap-3 text-lg md:text-xl hover:opacity-80 transition-opacity color-caribbean-green`}>
									<img
										src="/svg/spotifyIcon.svg"
										alt="Spotify"
										className="w-6 h-6"
									/>
									Spotify : Studio5220
								</a>
								{/* Discord */}
								<a href="https://discord.com/invite/nB2CBCfS3"
									className={`flex items-center gap-3 text-lg md:text-xl hover:opacity-80 transition-opacity color-caribbean-green`}
									target="_blank"
									rel="noopener noreferrer">
									<img
										src="/svg/discordIcon.svg"
										alt="Discord"
										className="w-5 h-5"
									/>
									Discord : Studio 52.20
								</a>

							</div>
						</div>

						{/* ------ IMAGE ------  */}
						<div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ml-12">
							<img
								src="/img/casqueAudio.png"
								alt="Image casque Audio vert"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ------------------------ TU VEUX PARTICIPER ? ------------------------  */}
			<section className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16">
				<div className="max-w-7xl mx-auto w-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
						{/* ------ IMAGE ------  */}
						<div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ml-12">
							<img
								src="/img/microphone.png"
								alt="Image d'un microphone vert"
								className="w-full h-full object-cover"
							/>
						</div>

						{/* ------ TEXTE ------  */}
						<div className="order-1 lg:order-2">
							<h2 className={`textStyle-title mb-6 color-caribbean-green`}>
								TU VEUX PARTICIPER ?
							</h2>
							<p className="text-lg md:text-xl leading-relaxed mb-4">
								Tu peux :
							</p>
							<ul className="space-y-3 text-base md:text-lg">
								<li className="flex items-start">
									<span className={`mr-3 text-xl color-caribbean-green`}>▸</span>
									<span>proposer ta propre émission</span>
								</li>
								<li className="flex items-start">
									<span className={`mr-3 text-xl color-caribbean-green`}>▸</span>
									<span>venir animer un segment</span>
								</li>
								<li className="flex items-start">
									<span className={`mr-3 text-xl color-caribbean-green`}>▸</span>
									<span>créer un jingle</span>
								</li>
								<li className="flex items-start">
									<span className={`mr-3 text-xl color-caribbean-green`}>▸</span>
									<span>enregistrer un podcast</span>
								</li>
								<li className="flex items-start">
									<span className={`mr-3 text-xl color-caribbean-green`}>▸</span>
									<span>donner un coup de main en technique</span>
								</li>
								<li className="flex items-start">
									<span className={`mr-3 text-xl color-caribbean-green`}>▸</span>
									<span>ou juste passer pour voir l'ambiance</span>
								</li>
							</ul>
							<p className="mt-6 text-base md:text-lg italic opacity-90">
								Pas besoin d'expérience, juste de la motivation et une bonne dose de curiosité.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ------------------------ L'EQUIPE ------------------------  */}
			<section className={`min-h-screen flex flex-col justify-center py-16 px-4 md:px-8 lg:px-16 bg-(--color-dark-green-o50)`}>
				<div className="max-w-7xl mx-auto w-full">
					<h2 className={`textStyle-title mb-12 text-center color-caribbean-green`}>
						L'ÉQUIPE
					</h2>

					<div className="overflow-x-auto pb-8 scrollbar-hide">
						<div className="flex gap-6 md:gap-8" style={{ width: 'max-content' }}>
							{teamMembers.map((member, index) => (
								<div
									key={index}
									className={`shrink-0 w-72 md:w-80 rounded-lg p-6 border-2 bg-(--color-bangladesh-green) border-(--color-mountain-meadow)`}
								>
									<div className={`w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden bg-(--color-mountain-meadow)`}>
										<img
											src={member.image}
											alt={member.name}
											className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
										/>
									</div>

									<div className="text-center">
										<h3 className={`textStyle-subtitle mb-2 color-caribbean-green`}>
											{member.name}
										</h3>
										<p className={`text-lg font-semibold mb-4 color-anti-flash-white`}>
											{member.role}
										</p>
										<p className="text-sm md:text-base italic opacity-90 leading-relaxed">
											"{member.bio}"
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<p className="text-center mt-6 opacity-70 text-sm md:text-base">
						← Fais défiler pour voir toute l'équipe →
					</p>
				</div>
			</section>
		</div>
	);
};

export default StudioPage;
