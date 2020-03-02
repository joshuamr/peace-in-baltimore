import React, { useState, Fragment } from "react";
import classes from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import Submitted from "./Submitted/Submitted";
import { sendEmail } from "../../../util/util";

const Contact = props => {
	let [formData, setFormData] = useState({});
	let [emailStatus, setEmailStatus] = useState("drafting");
	const { register, handleSubmit, errors } = useForm();
	const handleError = err => {
		console.log(err);
		window.scrollTo(0, 0);
		setEmailStatus("error");
	};
	const onSubmit = async data => {
		setEmailStatus("submit");
		setFormData(data);
		setClassName(classes.Contact + " " + classes.Contact__zoomOutUp);
		try {
			let res = await sendEmail(data);
			console.log(res);
			if (res.status === 200) {
				setClassName(
					classes.Contact + " " + classes.Contact__zoomOutUp
				);
				window.scrollTo(0, 300);
				setTimeout(() => {
					setEmailStatus("sent");
				}, 500);
			} else {
				handleError(res);
			}
		} catch (err) {
			handleError(err);
		}
	};
	let setInputClass = (name, type = "input") => {
		let baseClass = "Contact__" + type;
		let inputClassName = classes[baseClass];
		if (errors[name])
			inputClassName =
				inputClassName + " " + classes[baseClass + "__error"];
		return inputClassName;
	};
	let [className, setClassName] = useState(classes.Contact);
	const restart = data => {
		if (emailStatus === "error") {
			setFormData(data);
		} else {
			setFormData({ name: data.name, email: data.email });
		}
		setEmailStatus("drafting");
		setClassName(classes.Contact + " " + classes.Contact__zoomInDown);
	};
	return (
		<Fragment>
			{(emailStatus === "sent" || emailStatus === "error") && (
				<Submitted
					data={formData}
					restart={restart}
					emailStatus={emailStatus}
				/>
			)}
			{(emailStatus === "drafting" || emailStatus === "submit") && (
				<form className={className} onSubmit={handleSubmit(onSubmit)}>
					<input
						name="name"
						placeholder="Full Name"
						ref={register({ required: true })}
						className={setInputClass("name")}
						defaultValue={formData.name}
					/>
					{errors.name && (
						<span className={classes.Contact__err}>
							Please enter your name.
						</span>
					)}
					<input
						name="email"
						placeholder="Email"
						ref={register({
							required: true,
							pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
						})}
						className={setInputClass("email")}
						defaultValue={formData.email}
					/>
					{errors.email && (
						<span className={classes.Contact__err}>
							Please enter a valid email address.
						</span>
					)}
					<input
						name="subject"
						placeholder="Subject"
						ref={register({
							required: true
						})}
						className={setInputClass("subject")}
						defaultValue={formData.subject}
					/>
					{errors.subject && (
						<span className={classes.Contact__err}>
							Please enter a subject.
						</span>
					)}

					<textarea
						name="body"
						placeholder="Type your email here..."
						ref={register({
							required: true
						})}
						className={setInputClass("body", "textarea")}
						rows="20"
						defaultValue={formData.body}
					></textarea>
					{errors.body && (
						<span className={classes.Contact__err}>
							Please write a message.
						</span>
					)}
					<input
						type="submit"
						className={classes.Contact__submit}
						disabled={emailStatus === "submit"}
					/>
				</form>
			)}
		</Fragment>
	);
};

export default Contact;
