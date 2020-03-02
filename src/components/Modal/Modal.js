import React, { useContext, Fragment, useState, useEffect } from "react";
import classes from "./Modal.module.scss";
import { toggleNoScroll } from "../../util/util";
import { ModalContext } from "../../Context/modal-context";
import Paypal from "./Paypal/Paypal";

const Modal = props => {
	let modalContext = useContext(ModalContext);
	let modalOpen = modalContext.modalOpen;
	let setModalOpen = modalContext.setModalOpen;
	let { text, title, image, component } = modalContext.modalComponents;
	let [backdropClass, setBackdropClass] = useState();
	let [modalClass, setModalClass] = useState();
	let background = {
		backgroundImage: `linear-gradient(rgba(238, 187, 85, .8), rgba(238, 187, 85, .9)), url(${image})`
	};
	let titleClass = classes.modal__title;
	if (component === "cta") titleClass += " " + classes.modal__title__cta;
	let paypal = component === "paypal";
	useEffect(() => {
		if (modalOpen) {
			setBackdropClass(classes.backdrop);
			setModalClass(classes.modal);
		} else {
			setBackdropClass(classes.backdrop + " " + classes.backdrop__closed);
			setModalClass(classes.modal + " " + classes.modal__closed);
		}
	}, [modalOpen]);
	toggleNoScroll(modalOpen);
	let closeModal = () => setModalOpen(false);
	return (
		<Fragment>
			<div className={backdropClass} onClick={closeModal}></div>
			<div className={modalClass}>
				<div className={titleClass} style={background}>
					{title}
					<div className={classes.modal__close} onClick={closeModal}>
						&times;
					</div>
				</div>
				<p className={classes.modal__text}>{text}</p>

				{paypal && <Paypal />}
			</div>
		</Fragment>
	);
};

export default Modal;
