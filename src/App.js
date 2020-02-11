import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import YogaMeditation from "./containers/YogaMeditation/YogaMeditation";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const drawerClicked = () => {
		setDrawerOpen(!drawerOpen);
	};
	document.body.classList.toggle("no__scroll", drawerOpen);
	return (
		<BrowserRouter>
			<Nav drawerOpen={drawerOpen} drawerClicked={drawerClicked}></Nav>
			<Route path="/" component={YogaMeditation} />
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
