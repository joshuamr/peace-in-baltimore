import React, { useContext } from "react";
import classes from "./Feature.module.scss";
import { ModalContext } from "../../../../Context/modal-context.js";
import Modal from "../../../Modal/Modal";
import { dataAos } from "../../../../util/util";

const Feature = props => {
	let modalContext = useContext(ModalContext);
	let { setModalOpen, setModalComponents } = modalContext;
	let openModal = () => {
		console.log(props.modalText);
		setModalComponents({
			title: props.title,
			text: props.modalText,
			image: props.modalImage
		});
		setModalOpen(true);
	};
	return (
		<div className={classes.feature}>
			<div className={classes.feature__side_one}>
				<div className={classes.feature__icon}>{props.children}</div>
				<h2
					className={classes.feature__title}
					style={
						props.title === "Supportive Community"
							? { marginTop: "0" }
							: {}
					}
				>
					{props.title}
				</h2>
				<h3 className={classes.feature__text}>{props.text}</h3>
			</div>
			<div className={classes.feature__side_two}>
				<div className={classes.feature__learn_more}>
					<div
						className={classes.feature__learn_more__text}
						onClick={openModal}
					>
						Learn More
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feature;
