import React, { Fragment } from "react";
import classes from "./ValueProp.module.scss";

const ValueProp = props => {
	return (
		<Fragment>
			<div className={classes.valuePropBorder}></div>
			<div className={classes.valueProp__wrap}>
				<div className={classes.valueProp}>
					<h2 className={classes.valueProp__sub_heading}>
						{props.meditation
							? "Peace, Joy, Vitality"
							: props.yoga
							? "Stretch, Breathe, Go Deeper"
							: ""}
					</h2>
					<h1 className={classes.tagLine}>
						{props.meditation
							? "Learn To Meditate"
							: props.yoga
							? "Hatha Yoga"
							: ""}{" "}
					</h1>
					<div className={classes.lotus}></div>
					<h2 className={classes.valueProp__when}>
						{" "}
						{props.meditation
							? "Sundays 10:00am - 11:15am"
							: props.yoga
							? "Sundays 11:15am - 12:30pm"
							: ""}
					</h2>
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
			</div>
		</Fragment>
	);
};

export default ValueProp;
