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
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Loader2, ArrowRight } from "lucide-react";
import Studio5220TextLogo from "@/components/Logo/TextLogo/TextLogo";
import { login, register } from "@/services/authService";


/* ----- COMPONENT ----- */
const AuthPage: React.FC = () => {
	const navigate = useNavigate();

	const [isLoginMode, setIsLoginMode] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setIsLoading(true);

		if (await login(email, password)) {
			navigate("/");
		} else {
			setError("Une erreur est survenue. Vérifiez vos informations.");
		}
		setIsLoading(false);
	};

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setIsLoading(true);

		if (await register(username, email, password)) {
			navigate("/");
		} else {
			setError("Une erreur est survenue. Vérifiez vos informations.");
		}
		setIsLoading(false);
	};


	return (
		<div className="min-h-screen w-full flex flex-col justify-center items-center background-dark-green p-4 relative overflow-hidden">
			<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-(--color-mountain-meadow) rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
			<div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10">
				<div className="flex flex-col items-center mb-8">
					<div className="mb-4">
						<Studio5220TextLogo color="var(--color-mountain-meadow)" size={0.8} />
					</div>
					<h2 className="text-3xl font-bold text-white text-center">
						{isLoginMode ? "Bon retour !" : "Créer un compte"}
					</h2>
					<p className="text-gray-400 text-sm mt-2 text-center">
						{isLoginMode
							? "Entrez vos identifiants pour accéder à vos projets."
							: "Rejoignez l'équipe et commencez à créer."}
					</p>
				</div>

				<form onSubmit={isLoginMode ? handleLogin : handleRegister} className="flex flex-col gap-4">
					{error && (
						<div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 text-red-200 text-sm text-center">
							{error}
						</div>
					)}
					{!isLoginMode && (
						<div className="relative group">
							<User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-(--color-mountain-meadow) transition-colors" size={20} />
							<input
								type="text"
								placeholder="Pseudonyme"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-(--color-mountain-meadow) transition-all"
								required={!isLoginMode}
							/>
						</div>
					)}
					<div className="relative group">
						<Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-(--color-mountain-meadow) transition-colors" size={20} />
						<input
							type="email"
							placeholder="Adresse email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-(--color-mountain-meadow) transition-all"
							required
						/>
					</div>
					<div className="relative group">
						<Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-(--color-mountain-meadow) transition-colors" size={20} />
						<input
							type="password"
							placeholder="Mot de passe"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-(--color-mountain-meadow) transition-all"
							required
						/>
					</div>
					<button
						type="submit"
						disabled={isLoading}
						className="mt-4 bg-(--color-mountain-meadow) text-black font-bold py-3 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(var(--color-mountain-meadow-rgb),0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isLoading ? (
							<><Loader2 className="animate-spin" /> Chargement...</>
						) : (
							<>{isLoginMode ? "Se connecter" : "S'inscrire"} <ArrowRight size={20} /></>
						)}
					</button>
				</form>

				<div className="mt-8 pt-6 border-t border-white/10 text-center flex flex-col gap-2 justify-center items-center">
					<p className="text-gray-400 text-sm">
						{isLoginMode ? "Pas encore de compte ?" : "Vous avez déjà un compte ?"}
						<button
							onClick={() => {
								setIsLoginMode(!isLoginMode);
								setError(null);
							}}
							className="ml-2 text-(--color-mountain-meadow) font-semibold hover:underline transition-all"
						>
							{isLoginMode ? "S'inscrire" : "Se connecter"}
						</button>
					</p>
					<NavLink
						to="/"
						className="ml-2 text-sm text-(--color-mountain-meadow) font-semibold hover:underline transition-all"
					>
						Revenir au menu
					</NavLink>
				</div>

			</div>
		</div>
	);
};

export default AuthPage;
