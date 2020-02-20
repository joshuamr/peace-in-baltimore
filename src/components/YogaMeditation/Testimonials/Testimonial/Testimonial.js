import React from "react";
import classes from "./Testimonial.module.scss";

const Testimonial = props => {
	let className = classes.testimonial + " " + props.classToAdd;
	return (
		<div className={className}>
			{/* <img src={props.image} className={classes.testimonial__image} /> */}
			<div className={classes.testimonial__quote}>
				<div className={classes.testimonial__text}>{props.text}</div>
				<div className={classes.testimonial__student}>
					-{props.student}
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
