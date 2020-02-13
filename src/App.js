import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import YogaMeditation from "./containers/YogaMeditation/YogaMeditation";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import About from './containers/About/About'

function App() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const drawerClicked = () => {
		setDrawerOpen(!drawerOpen);
	};
	document.body.classList.toggle("no__scroll", drawerOpen);
	document.getElementById("root").classList.toggle("no__scroll", drawerOpen);
	return (
		<BrowserRouter>
			<Nav
				drawerOpen={drawerOpen}
				drawerClicked={drawerClicked}
				linkChosen={drawerClicked}
			></Nav>
			<Switch>
				<Route path = "/about" component = {About} />
				<Route path="/yoga" component={YogaMeditation} />
				<Route path="/" component={YogaMeditation} />
			</Switch>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
