import React, { Fragment } from "react";
import classes from "./PageComponent.module.scss";
import { withRouter } from "react-router-dom";
import { pageComponentData } from "../../util/util";
import AboutPicture from "../../assets/images/meditating-baltimore.jpg";

const About = props => {
	const page = props.match.path.slice(1);
	let { title, text } = pageComponentData[page];
	let className =
		classes.PageComponent + " " + classes["PageComponent__" + page];
	let textRendered = text.map(paragraph => {
		return <p className={classes.PageComponent__text_p}>{paragraph}</p>;
	});
	return (
		<Fragment>
			<div className={className}>
				<div className={classes.PageComponent__image}>
					<div className={classes.PageComponent__image_pic} />
				</div>
				<main className={classes.PageComponent__main}>
					<h1 className={classes.PageComponent__title}>{title}</h1>
					<div className={classes.PageComponent__text}>
						{textRendered}
					</div>
				</main>
			</div>
		</Fragment>
	);
};

export default withRouter(About);
