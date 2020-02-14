import React, { useContext } from "react";
import classes from "./NavDrawer.module.scss";
import LinksList from "../../LinksList/LinksList";
import { NavContext } from "../../../Context/nav-context";
import { toggleNoScroll } from "../../../util/util";

const NavDrawer = props => {
	const navContext = useContext(NavContext);
	const { drawerOpen, setDrawerOpen } = navContext;
	const drawerClicked = () => {
		document.getElementById("checkbox").checked = false;
		setDrawerOpen(!drawerOpen);
	};
	toggleNoScroll(drawerOpen);
	let className = classes.drawer + " " + classes.closed;
	if (drawerOpen) className = classes.drawer + " " + classes.open;
	return (
		<div className={className}>
			<LinksList drawer={true} clicked={drawerClicked} />
		</div>
	);
};

export default NavDrawer;
