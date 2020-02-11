import React from "react";
import classes from "./LinksList.module.scss";
import { links } from "../../util/util";
import { withRouter, Link } from "react-router-dom";

const List = props => {
	const linksObject = links.map(link => {
		let className = classes.list__link;
		if (link.path === props.match.path)
			className += " " + classes.list__link__active;
		return (
			<li className={classes.list__list_item} key={link.text}>
				<Link className={className} to={link.path}>
					{link.text}
				</Link>
			</li>
		);
	});
	return <ul className={classes.list__list}>{linksObject}</ul>;
};

export default withRouter(List);
