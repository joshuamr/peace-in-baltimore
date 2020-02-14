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
		image: ""
	});
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
