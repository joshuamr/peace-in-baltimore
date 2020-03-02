import React, { useContext, useState, Fragment } from "react";
import classes from "./Paypal.module.scss";
import { PayPalButton } from "react-paypal-button-v2";
import { ModalContext } from "../../../Context/modal-context";
import { sendEmail } from "../../../util/util";

const Paypal = props => {
	let [paymentCompleted, setPaymentCompleted] = useState(false);
	let [paymentProcessing, setPaymentProcessing] = useState(false);
	let modalContext = useContext(ModalContext);
	let { classType, passType, price } = modalContext.modalComponents;
	let priceString = price.toString() + ".00";
	let handleSuccess = async (details, data) => {
		setPaymentProcessing(true);
		let { orderID } = data;
		let { payer, status, purchase_units } = details;
		let { name, email_address } = payer;
		let dataToSend = {
			name: name.given_name + " " + name.surname,
			"email": email_address,
			subject: "new payment made",
			body:
				"\nPayment Status: " +
				status +
				"\nOrderID: " +
				orderID +
				"\nAmount Paid: $" +
				priceString +
				"\nClass Type: " +
				classType +
				"\nPass Type: " +
				passType
		};
		await sendEmail(dataToSend);
		setPaymentProcessing(false);
		setPaymentCompleted(true);
	};
	let reset = () => setPaymentCompleted(false);
	return (
		<div className={classes.Paypal}>
			{!paymentCompleted && !paymentProcessing && (
				<Fragment>
					<div className={classes.Paypal__classType}>
						Class: {classType}
					</div>
					<div className={classes.Paypal__passType}>
						Purchase: {passType}
					</div>
					<div className={classes.Paypal__price}>
						Price: ${priceString}
					</div>
					<div className={classes.Paypal__button}>
						<PayPalButton
							amount={priceString}
							onSuccess={handleSuccess}
						/>
					</div>
				</Fragment>
			)}
			{paymentCompleted && (
				<div className={classes.Paypal__paymentFeedback}>
					<div className={classes.Paypal__paymentCompleted__title}>
						Payment Completed!{" "}
					</div>
					We look forward to having you in class.
				</div>
			)}
			{paymentProcessing && (
				<div className={classes.Paypal__paymentFeedback}>
					Payment in Progress...
				</div>
			)}
		</div>
	);
};

export default Paypal;

// setPaymentProcessing(true);
// 		let { orderID } = data;
// 		let dataToSend = {
// 			passType,
// 			classType,
// 			orderID,
// 			priceString
// 		};
// 		fetch(
// 			"https://osaleech6c.execute-api.us-east-1.amazonaws.com/dev/paypal-transaction-completed",
// 			{
// 				method: "POST",
// 				body: JSON.stringify(dataToSend)
// 			}
// 		)
// 			.then(res => {
// 				console.log(res);
// 				return res.json();
// 			})
// 			.then(resData => {
// 				console.log(resData);
// 				setPaymentCompleted(true);
// 				setPaymentProcessing(false);
// 			});
