import React, { useState } from "react";

export const NavContext = React.createContext({
	drawerOpen: false,
	setDrawerOpen: () => {}
});

export default props => {
	let [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<NavContext.Provider value={{ drawerOpen, setDrawerOpen }}>
			{props.children}
		</NavContext.Provider>
	);
};
