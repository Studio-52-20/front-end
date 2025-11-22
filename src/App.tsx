// Authors:
// >> Clément Lacroix - { clacroix2@etu.uqac.cq }
// >> Lucas Aubriet - { laubriet@etu.uqac.cq }
// >> Martin Vidal - { mvidal@etu.uqac.cq }
// >> Nathan TIROLF - { ntirolf@etu.uqac.cq }
// >> Romane Lesueur - { rlesueur@etu.uqac.cq }
// 
// („• ֊ •„)❤  <  Have a good day !
// --U-----U------------------------

/* ----- IMPORTS ----- */
import { useEffect, useState } from "react";
import { GetPagesDatas } from "./data/PageData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
			<div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
				{/* <Loader /> */}
				Loading...
			</div>
		);
	}

	return (
		<>
			<Router>
				<div>
					<Routes>
						{pagesDatas.map((pageData) => {
							// const content: React.ReactElement = pageData.logged ?
							//     <PrivateRoute><pageData.content /></PrivateRoute>:
							//     <pageData.content />;
							const content: React.ReactElement = <pageData.content />;
							return (
								<Route key={pageData.name} path={pageData.path} element={content} />
							);
						})}
					</Routes>
				</div>
			</Router>
		</>
	)
}

/* ----- EXPORTS ----- */
export default App;
