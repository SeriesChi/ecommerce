import React from "react";
import "./assets/scss/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./core/public/dashboard/Dashboard";
import Home from "./core/public/home/Home";
import Shop from "./core/public/shop/Shop";
import Contact from "./core/public/contact/Contact";
function App() {
	return (
		<>
			<Header />
			<main>
				<div className="hl" />
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/shop" element={<Shop />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Router>
				{/* <Home /> */}
			</main>
			<Footer />
		</>
	);
}

export default App;
