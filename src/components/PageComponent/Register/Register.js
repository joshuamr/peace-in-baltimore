import React from "react";
import classes from "./Register.module.scss";
import Card from "./Card/Card";

const Register = props => {
	let classTypes = ["Meditation", "Yoga", "Both Yoga and Meditation"];
	let cards = classTypes.map(classType => (
		<Card title={classType} key={classType} />
	));
	return <div className={classes.Register}>{cards}</div>;
};

export default Register;
