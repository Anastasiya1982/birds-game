import React from "react";
import {useSelector} from "react-redux";

// eslint-disable-next-line no-unused-vars
import styles from "./Button.scss";
import cn from "classnames";



const Button = ({label, onClick}) => {

	const win = useSelector(state => state.birdsData.isWin);
	const isEndGame = useSelector(state => state.birdsData.isGameOver);

	const btnClasses = cn("button", {
		disabled: (win === false && !isEndGame)
	});



	return (
		<button className={btnClasses} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
