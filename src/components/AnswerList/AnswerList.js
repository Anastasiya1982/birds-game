import React from "react";
import cnBind from "classnames/bind";

import styles from "./Answer.module.scss";

import birdsData from "../../birdData";
import AnswerItem from "./AnswerItem/AnswerItem";


const cx=cnBind.bind(styles);

const AnswerList = ({section,win, ...otherProps}) => {


	const classes=cx(styles.answerList,{
		disabled:win
	});
	return (
		<div className={classes}>
			{birdsData[section].map((el) => (
				<AnswerItem key={el.id}
					id={el.id}
					name={el.name}
					section={section}
					{...otherProps}
				/>
			))
			}
		</div>
	);
};


export default AnswerList;

