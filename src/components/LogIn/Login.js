import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import { FormControl, Button, FormLabel, FormGroup, TextField } from "@material-ui/core";

import { login } from "../../store/loginSlice";
import Preloader from "../Preloader/Preloader";

import styles from "./LogIn.module.scss";
toast.configure();

const LogIn = () => {
    const isUserLogin = useSelector((state) => state.loginData.isUserLogin);
    const user = useSelector((state) => state.loginData.user);
    const isLoading = useSelector((state) => state.loginData.isLoading);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (!isUserLogin) {
            history.push("/login");
        } else if (user.isActivated && isUserLogin) {
            history.push("/");
        } else {
            toast("Активируйте аккаунт, перейдя по ссылке на почте, указанной вами при регистрации", {});
        }
    }, [isUserLogin, user]);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            dispatch(login(values.email, values.password));
        },

        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = "Email is required";
            } else if (!values.password) {
                errors.password = "password is required";
            }
            return errors;
        },
    });

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <div className={styles.loginContainer}>
                    <Grid container justifyContent="center">
                        <Grid item xs={4}>
                            <form onSubmit={formik.handleSubmit}>
                                <FormControl>
                                    <FormLabel className={styles.formlabel}>
                                        Please, enter your email and password... if you are not registered, Sign Up!
                                    </FormLabel>
                                    <FormGroup>
                                        <TextField label="Email" margin="normal" {...formik.getFieldProps("email")} />
                                        {formik.errors.email && (
                                            <div className={styles.errorField}>{formik.errors.email}</div>
                                        )}
                                        <TextField
                                            label="Password"
                                            margin="normal"
                                            type="password"
                                            {...formik.getFieldProps("password")}
                                        />
                                        {formik.errors.password && (
                                            <div className={styles.errorField}>{formik.errors.password}</div>
                                        )}
                                        <Button type={"submit"} className={styles.button}>
                                            LogIn
                                        </Button>
                                    </FormGroup>
                                </FormControl>
                            </form>
                        </Grid>
                    </Grid>
                </div>
            )}
        </>
    );
};
export default LogIn;
