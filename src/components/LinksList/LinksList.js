import React, { useState, useEffect } from "react";
import classes from "./LinksList.module.scss";
import { links } from "../../util/util";
import { withRouter, Link } from "react-router-dom";

const List = props => {
	var listClass = classes.list__list;
	let addClass = className => {
		listClass += " " + classes["list__" + className];
	};
	if (props.drawer) addClass("drawer");
	if (props.footer) addClass("footer");
	if (props.nav) addClass("nav");
	let [path, setPath] = useState(props.location.pathname);
	useEffect(() => {
		if (props.location.pathname !== path) setPath(props.location.pathname);
	}, [props.location.pathname]);
	const linksObject = links.map(link => {
		let linkClass = classes.list__link;
		if (link.path === path) linkClass += " " + classes.list__link__active;
		return (
			<li
				className={classes.list__list_item}
				key={link.text}
				onClick={props.clicked}
			>
				<Link className={linkClass} to={link.path}>
					{link.text}
				</Link>
			</li>
		);
	});
	return <ul className={listClass}>{linksObject}</ul>;
};

export default withRouter(List);
