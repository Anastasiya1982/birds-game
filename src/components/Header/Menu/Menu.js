import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setIsUserLogin } from "../../../store/loginSlice";
import Button from "@material-ui/core/Button";

import style from "./Menu.module.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #008966 30%,  #00BC8C 90%)",
        border: 0,
        borderRadius: 3,
        color: "white",
        width: 80,
        height: 35,
        padding: "0 30px",
        "&:hover": {
            background: "linear-gradient(45deg, #006B4A 30%,  #008E5F 90%)",
        },
    },
    hide: {
        display: "none",
    },
});

function Menu() {
    const isUserLogin = useSelector((state) => state.loginData.isUserLogin);
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    console.log(isUserLogin);
    const updateUserStatus = (val) => dispatch(setIsUserLogin(val));

    useEffect(() => {
        if (!isUserLogin) {
            history.push("/login");
        } else {
            history.push("/account");
        }
    }, [isUserLogin]);

    const handleOnLogoutClick = () => {
        localStorage.removeItem("user");
        updateUserStatus(false);
    };

    return (
        <div className={style.menuContainer}>
            <ul className={style.nav}>
                <Link to="/account" className={style.navItem}>
                    <Button className={isUserLogin ? classes.root : classes.hide}> Account</Button>
                </Link>
                <Link to="/login" className={style.navItem}>
                    <Button className={isUserLogin ? classes.root : classes.hide} onClick={handleOnLogoutClick}>
                        {" "}
                        LogOut
                    </Button>
                    <Button className={isUserLogin ? classes.hide : classes.root}> LogIn</Button>
                </Link>
                <Link to="/signup" className={style.navItem}>
                    <Button className={isUserLogin ? classes.hide : classes.root}> SignUp</Button>
                </Link>
            </ul>
        </div>
    );
}

export default Menu;
