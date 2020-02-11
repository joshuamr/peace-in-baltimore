import React, { Fragment } from "react";
import Feature from "./Feature/Feature";
import { ReactComponent as Chakra } from "../../../assets/images/chakra.svg";
import { ReactComponent as Community } from "../../../assets/images/community.svg";
import { ReactComponent as Meditate } from "../../../assets/images/meditate.svg";

const Features = props => {
	let features = [
		{
			title: "Supportive Community",
			text:
				"Join a welcoming and accepting community that helps you deepen your understanding.",
			icon: <Community />
		},
		{
			title: "Authentic Learning",
			text:
				"Learn authentic teachings from the yoga meditation tradition.",
			icon: <Chakra />
		},
		{
			title: "The Gift of Practice",
			text:
				"Practice techniques that bring peace, joy and vitality to life.",
			icon: <Meditate />
		}
	];
	let featuresComponent = features.map((feature, index) => (
		<Feature title={feature.title} text={feature.text} key={index}>
			{" "}
			{feature.icon}{" "}
		</Feature>
	));
	return <Fragment>{featuresComponent}</Fragment>;
};

export default Features;
