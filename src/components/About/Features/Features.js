import React from "react";
import classes from "./Features.module.scss";
import Lotus from "../../../assets/images/Lotus-picture.jpg";
import Warriors from "../../../assets/images/warriors-1920.jpg";
import Josh from "../../../assets/images/Josh-Meditating.jpg";
import Feature from "./Feature/Feature";

const Features = props => {
	let features = [
		{ title: "Meditation", text: "Develop peace within", image: Lotus },
		{ title: "Yoga", text: "Renew body, mind, and heart", image: Warriors },
		{
			title: "Teacher",
			text: "Dedicated for more than 20 years",
			image: Josh
		}
	];
	return (
		<div className={classes.features}>
			{features.map(feature => (
				<Feature {...feature} />
			))}
		</div>
	);
};

export default Features;
