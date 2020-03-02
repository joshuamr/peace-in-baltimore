import React, { useState, useContext } from "react";
import classes from "./cta.module.scss";
import Lotuses from "./Lotuses/Lotuses";
import Button from "../../Button/Button";
import { gotToTop } from "../../../util/util";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../../util/util";
import { ModalContext } from "../../../Context/modal-context.js";
import MountainMeditator from "../../../assets/images/mountain-meditator-400x253.jpg";

const Cta = props => {
	let [submit, setSubmit] = useState(false);
	const { register, handleSubmit, errors } = useForm();
	let modalContext = useContext(ModalContext);
	let { setModalOpen, setModalComponents } = modalContext;
	let modalComponentConstants = {
		image: MountainMeditator,
		component: "cta"
	};
	let handleError = err => {
		console.log(err);
		setModalComponents({
			title: "Error Sending Message",
			text:
				"There was an error sending your message. Please check your internet connection and try again.  Thank you!",
			...modalComponentConstants
		});
	};
	const submitForm = async data => {
		setSubmit(true);
		try {
			let res = await sendEmail(data);
			if (res.status === 200) {
				setModalComponents({
					title: "Message sent!",
					text:
						"Thank you for your interest.  We will reply within 24 hours.  We are happy to connect with you!",
					...modalComponentConstants
				});
			} else {
				handleError(res);
			}
		} catch (err) {
			handleError(err);
		}
		setModalOpen(true);
		setSubmit(false);
	};
	const goToRegister = () => {
		gotToTop();
		props.history.push("/register");
	};
	let inputClassName = name => {
		let className = classes["cta__" + name];
		if (errors[name]) className += " " + classes.cta__input__error;
		return className;
	};
	return (
		<div className={classes.cta}>
			<Lotuses />
			<div className={classes.cta__learn_more}>
				<h3 className={classes.cta__title}>Learn More</h3>
				<form onSubmit={handleSubmit(submitForm)}>
					<div className={classes.cta__input}>
						<div className={classes.cta__input__holder}>
							<input
								type="text"
								className={inputClassName("name")}
								placeholder="Full Name"
								name="name"
								ref={register({ required: true })}
							/>
							{errors.name && (
								<span className={classes.cta__err}>
									Plese enter your name.
								</span>
							)}
						</div>
						<div className={classes.cta__input__holder}>
							<input
								type="email"
								className={inputClassName("email")}
								name="email"
								placeholder="Email"
								ref={register({
									required: true,
									pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
								})}
							/>
							{errors.email && (
								<span className={classes.cta__err}>
									Plese enter your email.
								</span>
							)}
						</div>
					</div>
					<div className={classes.cta__btn}>
						<Button disabled={submit}>Submit</Button>
					</div>
				</form>
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
