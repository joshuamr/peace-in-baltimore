import React from "react";
import classes from "./Resources.module.scss";

const Resources = props => {
	return (
		<div className={classes.Resources}>
			<div className={classes.Resources__youtube__link}>
				<a
					href="https://www.youtube.com/watch?v=Y87Ktcar6R4"
					className={classes.Resources__link}
					target="_blank"
				>
					Full Yoga Sutras Chant
				</a>
				<div className={classes.Resources__youtube}>
					<iframe
						src="https://www.youtube.com/embed/Y87Ktcar6R4"
						frameBorder="0"
						allow="autoplay; encrypted-media"
						allowFullScreen
						title="video"
						height="100%"
						width="100%"
					/>
				</div>
			</div>
			<a
				href="https://swamij.com/yoga-sutras.htm"
				className={classes.Resources__link}
				target="_blank"
			>
				Online Sutra Interpretations
			</a>
		</div>
	);
};

export default Resources;
