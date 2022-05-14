import React from "react";
import "./assets/scss/main.scss";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Dashboard from "./core/public/dashboard/Dashboard";
function App() {
	return (
		<>
			<Header />
			<main>
				<Dashboard />
			</main>
			<Footer />
		</>
	);
}

export default App;
