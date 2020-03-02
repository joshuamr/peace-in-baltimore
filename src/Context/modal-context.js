import React, { useState } from "react";

export const ModalContext = React.createContext({
	checkProblem: () => {},
	modalOpen: false,
	setModalOpen: () => {},
	modalComponents: {},
	setModalComponents: () => {}
});

export default props => {
	let [modalOpen, setModalOpen] = useState(false);
	let [modalComponents, setModalComponents] = useState({
		text: "",
		title: "",
		image: "",
		component: "",
		price: 0,
		classType: "",
		passType: ""
	});
	let checkProblem = () => {};
	return (
		<ModalContext.Provider
			value={{
				modalOpen,
				setModalOpen,
				modalComponents,
				setModalComponents
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
};
