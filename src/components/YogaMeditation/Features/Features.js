import React from "react";
import Feature from "./Feature/Feature";
import { ReactComponent as Chakra } from "../../../assets/images/chakra.svg";
import { ReactComponent as Community } from "../../../assets/images/community.svg";
import { ReactComponent as Meditate } from "../../../assets/images/meditate.svg";
import { ReactComponent as Yoga } from "../../../assets/images/yoga.svg";
import classes from "./Features.module.scss";

const Features = props => {
	let learning = props.meditation
		? "Learn authentic teachings from the yoga meditation tradition"
		: props.yoga
		? "Learn from a teacher with over 20 years experience."
		: "";
	let features = [
		{
			title: "Supportive Community",
			text: `Join a welcoming and accepting community that helps you ${
				props.meditation
					? "deepen your understanding"
					: props.yoga
					? "go 100%"
					: ""
			}.`,
			icon: <Community />
		},
		{
			title: "Authentic Learning",
			text: learning,
			icon: <Chakra />
		},
		{
			title: "The Gift of Practice",
			text:
				"Practice techniques that bring peace, joy and vitality to life.",
			icon: props.meditation ? <Meditate /> : props.yoga ? <Yoga /> : ""
		}
	];
	let featuresComponent = features.map((feature, index) => (
		<Feature title={feature.title} text={feature.text} key={index}>
			{" "}
			{feature.icon}{" "}
		</Feature>
	));
	return <div className={classes.features}>{featuresComponent}</div>;
};

export default Features;
