import React, { Fragment } from "react";
import Header from "../../components/YogaMeditation/Header/Header";
import ValueProp from "../../components/YogaMeditation/ValueProp/ValueProp";
import Features from "../../components/YogaMeditation/Features/Features";
import Testimonials from "../../components/YogaMeditation/Testimonials/Testimonials";
import Testimonial from "../../components/YogaMeditation/Testimonials/Testimonial/Testimonial";
import classes from "./YogaMeditation.module.scss";
import Cta from "../../components/YogaMeditation/Cta/cta";

const YogaMeditaiton = props => {
	return (
		<div>
			<div>
				<Header></Header>
				<ValueProp />
			</div>
			<div className={classes.main}>
				<Features />
				<div className={classes.testimonials}>
					<Testimonials />
				</div>
				<Cta></Cta>
			</div>
		</div>
	);
};

export default YogaMeditaiton;
