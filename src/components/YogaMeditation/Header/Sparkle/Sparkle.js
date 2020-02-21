import React, { useState, useEffect } from "react";
import classes from "./Sparkle.module.scss";

const Sparkle = props => {
	let [windowWidth, setWindowWidth] = useState(window.innerWidth);
	let headerWidth = windowWidth;
	if (windowWidth >= 900) headerWidth = windowWidth - 60;
	if (windowWidth >= 1200) headerWidth = 0.95 * windowWidth - 60;

	let [windowHeight, setWindowHeight] = useState(window.innerHeight);
	let headerHeight = windowHeight * 0.9;

	let viewportRatio = headerWidth / headerHeight;

	//640 width x 486 high
	let pictureRatio = 1.31687;

	let backgroundPosition = 0.65;
	// if (viewportRatio >= 0.93 && viewportRatio < pictureRatio)
	// 	backgroundPosition = 0.8;

	let heartFromLeftEdge = 0.6835625;
	let differenceToAdjust = heartFromLeftEdge - backgroundPosition;
	let left =
		pictureRatio * headerHeight * differenceToAdjust +
		backgroundPosition * headerWidth +
		"px";

	//if viewportRatio < pictureRatio
	let bottom = "38%";

	if (viewportRatio >= pictureRatio) {
		left = "68.35625%";
		backgroundPosition = 1;
		bottom = (0.38 * headerWidth) / pictureRatio + "px";
	}
	let resizer = () => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	};
	useEffect(() => {
		window.addEventListener("resize", resizer);
		return () => {
			window.removeEventListener("resize", resizer);
		};
	}, []);

	return <div className={classes.Sparkle} style={{ bottom, left }}></div>;
};

export default Sparkle;
