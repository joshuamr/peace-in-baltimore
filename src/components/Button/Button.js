import React from "react";
import classes from "./Button.module.scss";

const Button = props => {
	let className = classes.btn
	if (!props.submit) className += " " + classes.btn__shadow
	return (
		<button onClick={props.clicked} className={className}>
			{props.children}
		</button>
	);
};

export default Button;
