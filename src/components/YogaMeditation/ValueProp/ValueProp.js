import React, { Fragment } from "react";
import classes from "./ValueProp.module.scss";

const ValueProp = props => {
	return (
		<Fragment>
			<div className={classes.valuePropBorder}></div>
			<div className={classes.valueProp}>
				<h2>Peace, Joy, Vitality-- </h2>
				<h1 className={classes.tagLine}>Learn To Meditate</h1>
				<div className={classes.lotus}></div>
				<h2 className={classes.valueProp__when}> Sundays 10:00am </h2>
				<h4 className={classes.valueProp__where}>
					<a
						href="https://www.naomeditation.com/"
						target="_blank"
						className={classes.valueProp__link}
						rel="noopener noreferrer"
					>
						Nao Meditation Studio
					</a>{" "}
				</h4>
			</div>
		</Fragment>
	);
};

export default ValueProp;
