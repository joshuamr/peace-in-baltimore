import React from "react";
import classes from "./Button.module.scss";

const Button = props => {
	let className = classes.btn;
	return (
		<button
			onClick={props.clicked}
			className={className}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default Button;
