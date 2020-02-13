import React from "react";
import classes from "./Feature.module.scss";
import Button from "../../Button/Button";

const Feature = props => {
	return (
		<div className={classes.feature}>
			<div className={classes.feature__side_one}>
				<div className={classes.feature__icon}>{props.children}</div>
				<h2
					className={classes.feature__title}
					style={
						props.title === "Supportive Community"
							? { marginTop: "0" }
							: {}
					}
				>
					{props.title}
				</h2>
				<h3 className={classes.feature__text}>{props.text}</h3>
			</div>
			<div className={classes.feature__side_two}>
				<div className={classes.feature__learn_more}>
					<div className={classes.feature__learn_more__text}>
						Learn More
					</div>
					{/* <div className={classes.feature__learn_more__text}>
						More
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Feature;
