import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

import style from "./Menu.module.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #008966 30%,  #00BC8C 90%)",
        border: 0,
        borderRadius: 3,
        color:"white",
        width:80,
        height: 35,
        padding: "0 30px",
        "&:hover": {
            background:  "linear-gradient(45deg, #006B4A 30%,  #008E5F 90%)"
        },
    },
});

function Menu (){
    const classes = useStyles();
    const handleOnLoginClick = () => {
        console.log("SignIn");
    };

    const handleOnSignInClick = () => {
        console.log("SignUp");
    };
    const handleOnAccountClick = () => {
        console.log("Account");
    };

    return (
        <div className={style.menuContainer}>
            <ul className={style.nav}>
                <Link to="/login" className={style.navItem}>
                    <Button
                        className={classes.root}
                        onClick={handleOnLoginClick}
                    > LogIn</Button>
                    <Link to="/account" className={style.navItem}>
                        <Button
                            className={classes.root}
                            onClick={handleOnAccountClick}
                        > Account</Button></Link>
                </Link>
                <Link to="/signup" className={style.navItem}>
                    <Button
                    className={classes.root}
                    onClick={handleOnSignInClick}
                > SignUp</Button></Link>
            </ul>
        </div>
    );
}

export default Menu;
