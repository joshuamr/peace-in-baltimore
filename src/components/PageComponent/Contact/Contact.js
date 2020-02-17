import React from "react";
import classes from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import Button from '../../Button/Button'

const Contact = props => {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = data => {
		console.log(data);
	};
	return (
		<form className={classes.Contact}>
			<input
				name="name"
				placeholder="Full Name"
				ref={register({ required: true })}
				className={classes.Contact__input}
			/>
			{errors.name && (
				<span className={classes.Contact__err}>
					Please enter your name
				</span>
			)}
			<input
				name="email"
				placeholder="Email"
				ref={register({
					required: true,
					pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				})}
				className={classes.Contact__input}
			/>
			{errors.email && (
				<span className={classes.Contact__err}>
					Please enter a valid email address
				</span>
			)}
			<input
				name="subject"
				placeholder="Subject"
				ref={register({
					required: true
				})}
				className={classes.Contact__input}
			/>
			{errors.subject && (
				<span className={classes.Contact__err}>
					Please enter a subject
				</span>
			)}

			<textarea
				name="content"
				placeholder="Type your email here..."
				ref={register({
					required: true
				})}
				className={classes.Contact__textarea}
				rows = "20"
			></textarea>
			{errors.content && (
				<span className={classes.Contact__err}>
					Please write a message
				</span>
			)}
			{/* <input type="submit" className={classes.Contact__submit} /> */}
			<Button submit = {true} clicked = {onSubmit}>Submit</Button>
		</form>
	);
};

export default Contact;
