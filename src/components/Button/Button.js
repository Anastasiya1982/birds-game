import React from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./Button.scss";
import cn from "classnames";

const Button = ({win, label, onClick, isEndGame}) => {

	const btnClasses = cn("button", {
		disabled: (!win && !isEndGame)
	});

	return (
		<button className={btnClasses} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
