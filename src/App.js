import React, { useState, useContext } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import YogaMeditation from "./containers/YogaMeditation/YogaMeditation";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import About from "./containers/About/About";
import NavContextProvider from "./Context/nav-context";

function App() {
	return (
		<BrowserRouter>
			<NavContextProvider>
				<Nav />
			</NavContextProvider>
			<Switch>
				<Route path="/about" component={About} />
				<Route path="/yoga" component={YogaMeditation} />
				<Route path="/" component={YogaMeditation} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
