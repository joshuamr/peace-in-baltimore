import React, { useState, useEffect, Fragment } from "react";
import Testimonial from "./Testimonial/Testimonial";
import classes from "./Testimonials.module.scss";
import { testimonials } from "../../../util/util";

const Testimonials = props => {
	let [testimonial1, setTestimonial1] = useState(testimonials[0]);

	let [testimonial2, setTestimonial2] = useState(testimonials[1]);
	let [classListTestimonial1, setClassListTestimonial1] = useState(
		classes.animateEntrance
	);
	let [classListTestimonial2, setClassListTestimonial2] = useState(
		classes.hide
	);
	useEffect(() => {
		let testimonial1Number = 0;
		let testimonial2Number = 1;
		let counter = 0;
		// intervalDuration must be a factor of 2000
		let intervalDuration = 500;
		let animationDuration = 2000 / intervalDuration;
		let screenIntervals = 16;
		let interval = setInterval(() => {
			counter++;
			if (counter === screenIntervals) {
				setClassListTestimonial1(classes.animateExit);
				setClassListTestimonial2(classes.animateEntrance);
			}
			if (counter === screenIntervals + animationDuration) {
				testimonial1Number += 2;
				if (testimonial1Number >= testimonials.length) {
					testimonial1Number =
						testimonial1Number % testimonials.length;
				}
				setClassListTestimonial1(classes.hide);
				setTestimonial1(testimonials[testimonial1Number]);
			}

			if (counter === 2 * screenIntervals + animationDuration) {
				setClassListTestimonial1(classes.animateEntrance);
				setClassListTestimonial2(classes.animateExit);
			}
			if (counter === 2 * (screenIntervals + animationDuration)) {
				counter = 0;
				testimonial2Number += 2;
				if (testimonial2Number >= testimonials.length) {
					testimonial2Number =
						testimonial2Number % testimonials.length;
				}
				setClassListTestimonial2(classes.hide);
				setTestimonial2(testimonials[testimonial2Number]);
			}
		}, intervalDuration);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div>
			<div className={classes.testimonials}>
				<Testimonial
					{...testimonial1}
					classToAdd={classListTestimonial1}
				/>
			</div>
			<div className={classes.testimonials}>
				<Testimonial
					{...testimonial2}
					classToAdd={classListTestimonial2}
				/>
			</div>
		</div>
	);
};

export default Testimonials;
