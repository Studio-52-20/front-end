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
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@/style/tailwind.css"
import "@/style/global.css"
import App from "@/App"


/* ----- RENDERING ----- */
const container = document.getElementById('root');

if (!container) {
	console.error("Root element not found");
	throw new Error("Root element not found");
}

const root = createRoot(container);

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
)
