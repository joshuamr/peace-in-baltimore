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
					rel="noopener noreferrer"
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
			<div className={classes.Resources__YC}>
				<a
					href="https://docs.google.com/document/d/e/2PACX-1vSVb2T5fwj04cqMzeFt_7yXminR6bO6S3Jx2uU6SvT_uUNA9vZ_Bz-zkG707siYOfn7O7q4B-vj6x-K/pub"
					className={
						classes.Resources__link +
						" " +
						classes.Resources__link__YC
					}
					target="_blank"
					rel="noopener noreferrer"
				>
					Our Yoga Sutra Interpretations
				</a>
				<iframe
					src="https://docs.google.com/document/d/e/2PACX-1vSVb2T5fwj04cqMzeFt_7yXminR6bO6S3Jx2uU6SvT_uUNA9vZ_Bz-zkG707siYOfn7O7q4B-vj6x-K/pub?embedded=true"
					height="100%"
					width="100%"
				></iframe>
			</div>
			<a
				href="https://swamij.com/yoga-sutras.htm"
				className={classes.Resources__link}
				target="_blank"
				rel="noopener noreferrer"
			>
				SwamiJ Sutra Interpretations
			</a>
		</div>
	);
};

export default Resources;
