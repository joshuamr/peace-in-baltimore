import React, { useContext } from "react";
import classes from "./PassLinks.module.scss";
import { ModalContext } from "../../../../../Context/modal-context.js";
import UnderTheTree from "../../../../../assets/images/under-the-tree-1920.jpg";

const PassLinks = props => {
	let modalContext = useContext(ModalContext);
	let both = props.classType === "Both Yoga and Meditation";
	let { setModalOpen, setModalComponents } = modalContext;
	let purchasePass = index => {
		setModalComponents({
			title: "Purchase Pass",
			text: "",
			image: UnderTheTree,
			component: "paypal",
			price: both ? bothPrice[index] : individualPrices[index],
			classType: props.classType,
			passType: passTypes[index]
		});
		setModalOpen(true);
	};
	let passTypes = ["1 Class", "5 Class Pass", "10 Class Pass"];
	let individualPrices = [15, 60, 108];
	let bothPrice = [20, 75, 114];
	let links = passTypes.map((passType, index) => (
		<div
			className={classes.PassLinks__link}
			onClick={() => purchasePass(index)}
			key={passType}
		>
			{`${passType} ($${
				both ? bothPrice[index] : individualPrices[index]
			})`}
		</div>
	));
	return <div className={classes.PassLinks}>{links}</div>;
};

export default PassLinks;
