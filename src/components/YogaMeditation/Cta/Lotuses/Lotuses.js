import React, { useState, useEffect } from "react";
import { ReactComponent as Lotus } from "../../../../assets/images/Lotus.svg";
import classes from "./Lotuses.module.scss";

const Lotuses = props => {
	let makeLotuses = width => {
		let array = [];
		let numberOfLotuses = Math.floor(width / 70);
		for (let i = 0; i < numberOfLotuses; i++) {
			array.push(
				<div className={classes.lotuses__icon} key={i}>
					<Lotus />
				</div>
			);
		}
		return array;
	};
	let [lotuses, setLotuses] = useState(makeLotuses(window.innerWidth));
	useEffect(() => {
		window.addEventListener("resize", () => {
			setLotuses(makeLotuses(window.innerWidth));
		});
	}, []);
	return <div className={classes.lotuses}>{lotuses}</div>;
};

export default Lotuses;
