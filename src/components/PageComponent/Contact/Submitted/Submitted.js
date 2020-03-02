import React, { useState } from "react";
import classes from "./Submitted.module.scss";

const Submitted = props => {
	let messsageElements = ["Name", "Email", "Subject", "Body"];
	let errorMessages = [
		"We encountered an error while sending your message.",
		"Please check your internet connection and try again."
	];
	let messageSent = props.emailStatus === "sent";
	let messageRendered = messageSent
		? messsageElements.map(element => {
				return (
					<div
						className={classes.Submitted__message__component}
						key={element}
					>
						<div className={classes.Submitted__message__header}>
							{element}:
						</div>
						<div className={classes.Submitted__message__content}>
							{props.data[element.toLowerCase()]}
						</div>
					</div>
				);
		  })
		: errorMessages.map((message, index) => (
				<div className={classes.Submitted__error} key={index}>
					{message}
				</div>
		  ));
	let [className, setClassName] = useState(
		classes.Submitted + " " + classes.Submitted__zoomInDown
	);
	let restart = () => {
		setClassName(classes.Submitted + " " + classes.Submitted__zoomOutUp);
		window.scrollTo(0, 300);
		setTimeout(() => {
			props.restart(props.data);
		}, 500);
	};
	let title = messageSent ? "Message Sent" : "Error Sending Message";
	let restartMessage = messageSent ? "Send another message" : "Try again";
	return (
		<div className={className}>
			<h1 className={classes.Submitted__title}>{title}</h1>
			<div className={classes.Submitted__message}>{messageRendered}</div>
			<h4 className={classes.Submitted__restart} onClick={restart}>
				{restartMessage}
			</h4>
		</div>
	);
};

export default Submitted;
