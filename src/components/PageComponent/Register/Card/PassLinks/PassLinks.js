import React from "react";
import classes from "./PassLinks.module.scss";

const PassLinks = props => {
	let purchasePass = index => {};
	let passTypes = ["1 Class", "5 Class Pass", "10 Class Pass"];
	let individualPrices = [15, 60, 108];
	let bothPrice = [20, 75, 114];
	let links = passTypes.map((passType, index) => (
		<a
			className={classes.PassLinks__link}
			onClick={() => purchasePass(index)}
			key={passType}
		>
			{`${passType} ($${
				props.classType === "Both Yoga and Meditation"
					? bothPrice[index]
					: individualPrices[index]
			})`}
		</a>
	));
	return <div className={classes.PassLinks}>{links}</div>;
};

export default PassLinks;
