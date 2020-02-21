import React, { useState, Fragment } from "react";
import classes from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import Submitted from "./Submitted/Submitted";

const Contact = props => {
	let [formData, setFormData] = useState({});
	let [emailStatus, setEmailStatus] = useState("drafting");
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => {
		setFormData(data);
		setClassName(classes.Contact + " " + classes.Contact__zoomOutUp);
		setTimeout(() => {
			setEmailStatus("sent");
		}, 1000);
		// fetch(
		// 	"https://c7r4fst02d.execute-api.us-east-1.amazonaws.com/dev/contact",
		// 	{
		// 		method: "POST",
		// 		body: JSON.stringify(data)
		// 	}
		// )
		// 	.then(res => {
		// 		if (res.status === 200) {
		// 			setClassName(
		// 				classes.Contact + " " + classes.Contact__zoomOutUp
		// 			);
		// 			setTimeout(() => {
		// 				setEmailStatus("sent");
		// 			}, 1000);
		// 		}
		// 	})
		// 	.catch(err => {
		// 		setEmailStatus("error");
		// 	});
	};
	let inputClass = classes.Contact__input;
	let setInputClass = name =>
		errors[name]
			? inputClass + " " + classes.Contact__input__error
			: inputClass;
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
			{emailStatus !== "drafting" && (
				<Submitted
					data={formData}
					restart={restart}
					emailStatus={emailStatus}
				/>
			)}
			{emailStatus === "drafting" && (
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
						className={
							errors.content
								? classes.Contact__textarea +
								  " " +
								  classes.Contact__textarea__error
								: classes.Contact__textarea
						}
						rows="20"
						defaultValue={formData.body}
					></textarea>
					{errors.content && (
						<span className={classes.Contact__err}>
							Please write a message.
						</span>
					)}
					<input type="submit" className={classes.Contact__submit} />
				</form>
			)}
		</Fragment>
	);
};

export default Contact;
