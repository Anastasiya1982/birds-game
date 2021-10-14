import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";

import { logout, setIsUserLogin } from "../../../store/loginSlice";

import styles from "./Menu.module.scss";

function Menu() {
    const isUserRegister = useSelector((state) => state.loginData.isActivated);
    const isUserLogin = useSelector((state) => state.loginData.isUserLogin);
    const dispatch = useDispatch();
    const history = useHistory();

    const updateUserStatus = (isUserActivated) => dispatch(setIsUserLogin(isUserActivated));

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
                    <Button className={isUserLogin ? styles.root : styles.hide} onClick={onAccountButtonClick}>
                        Account
                    </Button>
                </Link>
                <Link to="/login" className={styles.navItem}>
                    <Button className={isUserLogin ? styles.root : styles.hide} onClick={handleOnLogoutClick}>
                        LogOut
                    </Button>
                    <Button className={isUserLogin ? styles.hide : styles.root}> LogIn</Button>
                </Link>
                <Link to="/signup" className={styles.navItem}>
                    <Button className={isUserLogin ? styles.hide : styles.root}> SignUp</Button>
                </Link>
            </ul>
        </div>
    );
}

export default Menu;
