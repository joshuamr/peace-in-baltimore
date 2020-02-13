import React from "react";
import Header from "../../components/YogaMeditation/Header/Header";
import ValueProp from "../../components/YogaMeditation/ValueProp/ValueProp";
import Features from "../../components/YogaMeditation/Features/Features";
import Testimonials from "../../components/YogaMeditation/Testimonials/Testimonials";
import classes from "./YogaMeditation.module.scss";
import Cta from "../../components/YogaMeditation/Cta/cta";

const YogaMeditaiton = props => {
	let yoga = props.history.location.pathname === "/yoga";
	let meditation = props.history.location.pathname === "/";
	return (
		<div>
			<div>
				<Header yoga={yoga} meditation={meditation}></Header>
				<ValueProp yoga={yoga} meditation={meditation} />
			</div>
			<div className={classes.main}>
				<Features yoga={yoga} meditation={meditation} />
				<div className={classes.testimonials}>
					<Testimonials yoga={yoga} meditation={meditation} />
				</div>
				<Cta yoga={yoga} meditation={meditation}></Cta>
			</div>
		</div>
	);
};

export default YogaMeditaiton;
