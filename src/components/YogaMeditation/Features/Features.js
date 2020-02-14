import React from "react";
import Feature from "./Feature/Feature";
import { ReactComponent as Chakra } from "../../../assets/images/chakra.svg";
import { ReactComponent as Community } from "../../../assets/images/community.svg";
import { ReactComponent as Meditate } from "../../../assets/images/meditate.svg";
import { ReactComponent as Yoga } from "../../../assets/images/yoga.svg";
import CommunityPic from "../../../assets/images/community-small.jpg";
import BookPic from "../../../assets/images/book-mystic-800.jpg";
import Victory from "../../../assets/images/victory-meditation-small.jpg";
import TreePose from "../../../assets/images/tree-on-beach-small.jpg";
import classes from "./Features.module.scss";

const Features = props => {
	let learning = props.meditation
		? "Learn authentic teachings from the yoga meditation tradition"
		: props.yoga
		? "Learn from a teacher with over 20 years experience."
		: "";
	let features = [
		{
			title: "Supportive Community",
			text: `Join a welcoming and accepting community that helps you ${
				props.meditation
					? "deepen your understanding"
					: props.yoga
					? "go 100%"
					: ""
			}.`,
			modalText:
				"Our group began practicing together for over 10 years ago.  Our members span a diverse range of backgrounds and ages.  We welcome everyone, offering unconditional support, encouragement, and wisdom to each other as we go about the challenging and deeply rewarding work of finding peace and staying centered.",
			modalImage: CommunityPic,
			icon: <Community />
		},
		{
			title: "Authentic Learning",
			text: learning,
			modalText:
				"Our teachings come from the Yoga Sutras, an ancient text describing the full teachings of yoga.  The sutras consist of 196 short sayings, that, when interpreted, understood, and practiced, lay the foundation for finding freedom from suffering.  We use these sutras as the basis of both life and meditaiton practices.",
			modalImage: BookPic,
			icon: <Chakra />
		},
		{
			title: "The Gift of Practice",
			text:
				"Practice techniques that bring peace, joy and vitality to life.",
			modalText: props.meditation
				? "Practice is the foundation for progress.  Our practice is based in the yoga tradition.  We use both mindfulness and concentration techniques that support physical, emotional, mental, and spiritual development. We learn to practice skillfully in order that we may become more mindful, more present, more equanimous, and more in touch with our own true nature."
				: "Our yoga practice is rooted in the hatha yoga tradition.  We use postures, breathing techniques, and relaxation procedures that help us to calm the nervous system, keep the body fit, and nurture our health. Our yoga practice supports our body to be capable, our mind to be adaptable, and our heart to be open.",
			modalImage: props.meditation ? Victory : TreePose,
			icon: props.meditation ? <Meditate /> : props.yoga ? <Yoga /> : ""
		}
	];
	let featuresComponent = features.map((feature, index) => (
		<Feature {...feature} key={index}>
			{" "}
			{feature.icon}{" "}
		</Feature>
	));
	return <div className={classes.features}>{featuresComponent}</div>;
};

export default Features;
