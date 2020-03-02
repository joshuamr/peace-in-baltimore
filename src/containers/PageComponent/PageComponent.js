import React, { Fragment } from "react";
import classes from "./PageComponent.module.scss";
import { Switch, Route } from "react-router-dom";
import Contact from "../../components/PageComponent/Contact/Contact";
import Resources from "../../components/PageComponent/Resources/Resources";
import Register from "../../components/PageComponent/Register/Register";
import About from "../../components/PageComponent/About/About";

const PageComponent = props => {
	const page = props.match.path.slice(1);
	let mainClassName = classes.PageComponent__main;
	if (page === "Contact")
		mainClassName += " " + classes.PageComponent__main__Contact;
	let imageClassName =
		classes.PageComponent__image_pic +
		" " +
		classes["PageComponent__image_pic__" + page];
	return (
		<Fragment>
			<div className={classes.PageComponent}>
				<div className={classes.PageComponent__image}>
					<div className={imageClassName} />
				</div>
				<main className={mainClassName}>
					<h1 className={classes.PageComponent__title}>{page}</h1>
					<Switch>
						<Route path="/About" component={About} />
						<Route path="/Contact" component={Contact} />
						<Route path="/Resources" component={Resources} />
						<Route path="/Register" component={Register} />
					</Switch>
				</main>
			</div>
		</Fragment>
	);
};

export default PageComponent;
