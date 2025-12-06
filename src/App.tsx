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
import { useEffect, useState } from "react";
import { GetPagesDatas } from "@/data/PageData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "@/components/Layout/NavBar/NavBar";
import Footer from "@/components/Layout/Footer/Footer";
import Loader from "./components/Layout/Loader/Loader";

/* ----- COMPONENT ----- */
function App() {
	const pagesDatas = GetPagesDatas();
	const [loadingressources, setLoadingRessources] = useState<boolean>(true);

	useEffect(() => {
		const loadRessources = async () => {
			setLoadingRessources(false);
		}
		loadRessources();
	}, []);

	if (loadingressources) {
		return (
			<div className="h-screen w-screen flex justify-center items-center">
				<Loader />
			</div>
		);
	}

	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					{pagesDatas.map((pageData) =>
						<Route key={pageData.name} path={pageData.path} element={<pageData.content />} />
					)}
				</Routes>
				<Footer />
			</Router >
		</>
	)
}

/* ----- EXPORTS ----- */
export default App;
