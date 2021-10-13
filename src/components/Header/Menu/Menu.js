import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { logout, setIsUserLogin } from "../../../store/loginSlice";

import styles from "./Menu.module.scss";

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
    const isUserRegister = useSelector((state) => state.loginData.isActivated);
    const isUserLogin = useSelector((state) => state.loginData.isUserLogin);
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    const updateUserStatus = (val) => dispatch(setIsUserLogin(val));

    useEffect(() => {
        if (!isUserRegister) {
            history.push("/signup");
        } else {
            history.push("/");
        }
    }, [isUserRegister]);

    const handleOnLogoutClick = () => {
        dispatch(logout());
        updateUserStatus(false);
    };

    const onAccountButtonClick = () => {
        history.push("/account");
    };

    return (
        <div className={styles.menuContainer}>
            <ul className={styles.nav}>
                <Link to="/account" className={styles.navItem}>
                    <Button className={isUserLogin ? classes.root : classes.hide} onClick={onAccountButtonClick}>
                        Account
                    </Button>
                </Link>
                <Link to="/login" className={styles.navItem}>
                    <Button className={isUserLogin ? classes.root : classes.hide} onClick={handleOnLogoutClick}>
                        LogOut
                    </Button>
                    <Button className={isUserLogin ? classes.hide : classes.root}> LogIn</Button>
                </Link>
                <Link to="/signup" className={styles.navItem}>
                    <Button className={isUserLogin ? classes.hide : classes.root}> SignUp</Button>
                </Link>
            </ul>
        </div>
    );
}

export default Menu;
