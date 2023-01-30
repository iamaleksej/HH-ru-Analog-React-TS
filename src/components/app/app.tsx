import React from "react";
import { Routes, Route } from "react-router-dom";
import { FavoritesPage, HomePage } from "../pages";
import AppHeader from "../app-header";
import './app.sass';




const App: React.FC = () => {

	return (
		<>
			<AppHeader />
			<main role="main" className="container">
				<Routes>
					<Route
						path="/HH-ru-Analog-React-TS"
						element={<HomePage />}
					/>
					<Route
						path="/favorites"
						element={<FavoritesPage />}
					/>
				</Routes>
			</main>
		</>
	)
}


export default App;


