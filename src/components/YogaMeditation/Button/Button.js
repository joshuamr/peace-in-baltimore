import React from "react";
import classes from "./Button.module.scss";

const Button = props => {
	return (
		<button onClick={props.clicked} className={classes.btn}>
			{props.children}
		</button>
	);
};

export default Button;
