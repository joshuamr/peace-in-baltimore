import React from "react";
import classes from "./NavDrawer.module.scss";
import LinksList from "../../LinksList/LinksList";

const NavDrawer = props => {
	let className = classes.drawer + " " + classes.closed;
	if (props.drawerOpen) className = classes.drawer + " " + classes.open;
	return (
		<div className={className}>
			<LinksList drawer={true} clicked={props.linkChosen} />
		</div>
	);
};

export default NavDrawer;
