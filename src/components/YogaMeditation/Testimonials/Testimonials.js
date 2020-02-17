import React, { useState, useEffect, Fragment } from "react";
import Testimonial from "./Testimonial/Testimonial";
import classes from "./Testimonials.module.scss";
import underTheTree from "../../../assets/images/under-the-tree-640.jpg";
import riverMeditator from "../../../assets/images/river-meditator-600.jpg";
import mountainMeditator from "../../../assets/images/mountain-meditator-400x253.jpg";

const Testimonials = props => {
	let testimonials = [
		{
			text: "I love this class!",
			student: "Swami Ro",
			image: underTheTree
		},
		{
			text: "Completely changed my life.",
			student: "Buddha",
			image: riverMeditator
		},
		{
			text: "Best class ever!",
			student: "Oneness",
			image: mountainMeditator
		}
	];

	let [testimonial1, setTestimonial1] = useState(testimonials[0]);

	let [testimonial2, setTestimonial2] = useState(testimonials[1]);
	let [classList1, setClassList1] = useState(classes.animateEntrance);
	let [classList2, setClassList2] = useState(classes.hide);
	useEffect(() => {
		let testimonial1Number = 0;
		let testimonial2Number = 1;
		let counter = 0;
		let interval = setInterval(() => {
			// let incrementTestimonial = (
			counter++;
			if (counter === 4) {
				setClassList1(classes.animateExit);
				setClassList2(classes.animateEntrance);
			}
			if (counter === 8) {
				testimonial1Number += 2;
				if (testimonial1Number >= testimonials.length) {
					testimonial1Number = testimonial1Number % 3;
				}
				setClassList1(classes.hide);
				setTestimonial1(testimonials[testimonial1Number]);
			}

			if (counter === 12) {
				setClassList1(classes.animateEntrance);
				setClassList2(classes.animateExit);
			}
			if (counter === 16) {
				counter = 0;
				testimonial2Number += 2;
				if (testimonial2Number >= testimonials.length) {
					testimonial2Number = testimonial2Number % 3;
				}
				setClassList2(classes.hide);
				setTestimonial2(testimonials[testimonial2Number]);
			}
		}, 500);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div>
			<div className={classes.testimonials}>
				<Testimonial {...testimonial1} classToAdd={classList1} />
			</div>
			<div className={classes.testimonials}>
				<Testimonial {...testimonial2} classToAdd={classList2} />
			</div>
		</div>
	);
};

export default Testimonials;
