import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";
import AppHeader from "../app-header";
import './app.sass';


export default class App extends React.Component {

	render() {
		return (
			<>
				<AppHeader />
				<main role="main" className="container">
					<Routes>
						<Route
							path="/HH-ru-Analog-React-TS"
							element={<HomePage />}
						/>
					</Routes>
				</main>
			</>
		)
	}
}
