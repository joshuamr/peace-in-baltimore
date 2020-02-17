import React, { useState, useContext } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import YogaMeditation from "./containers/YogaMeditation/YogaMeditation";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import NavContextProvider from "./Context/nav-context";
import ModalContextProvider from "./Context/modal-context.js";
import Cta from "./components/YogaMeditation/Cta/cta";
import Modal from "./components/Modal/Modal";
import PageComponent from "./components/PageComponent/PageComponent";

function App() {
	return (
		<BrowserRouter>
			<NavContextProvider>
				<Nav />
			</NavContextProvider>
			<ModalContextProvider>
				<Switch>
					<Route path="/about" component={PageComponent} />
					<Route path="/resources" component={PageComponent} />
					<Route path="/register" component={PageComponent} />
					<Route path="/contact" component={PageComponent} />
					<Route path="/yoga" component={YogaMeditation} />
					<Route path="/" component={YogaMeditation} />
				</Switch>
				<Modal />
			</ModalContextProvider>
			<Cta />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
