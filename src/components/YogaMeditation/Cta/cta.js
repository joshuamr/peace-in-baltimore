import React from "react";
import classes from "./cta.module.scss";
import Lotuses from "./Lotuses/Lotuses";
import Button from "../../Button/Button";
import { gotToTop } from "../../../util/util";
import { withRouter } from "react-router-dom";

const Cta = props => {
	const submitForm = () => {};
	const goToRegister = () => {
		gotToTop();
		props.history.push("/register");
	};
	return (
		<div className={classes.cta}>
			<Lotuses />

			<div className={classes.cta__learn_more}>
				<h3 className={classes.cta__title}>Learn More</h3>
				<div className={classes.cta__input}>
					<input
						type="text"
						className={classes.cta__name}
						id="name"
						placeholder="Full Name"
					/>
					<input
						type="email"
						className={classes.cta__email}
						id="email"
						placeholder="Email"
					/>
				</div>
				<div className={classes.cta__btn}>
					<Button clicked={submitForm}>Submit</Button>
				</div>
				<h3
					className={
						classes.cta__title + " " + classes.cta__title__large
					}
				>
					Join us!
				</h3>
				<Button clicked={goToRegister}>Register</Button>
			</div>
		</div>
	);
};

export default withRouter(Cta);
