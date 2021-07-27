import React from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./Button.scss";
import cn from "classnames";
import {useSelector} from "react-redux";


const Button = ({ label, onClick, isEndGame}) => {
 const win=useSelector(state => state.birdsData.isWin);
	const btnClasses = cn("button", {
		disabled: (win===false && !isEndGame)
	});

	return (
		<button className={btnClasses} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
