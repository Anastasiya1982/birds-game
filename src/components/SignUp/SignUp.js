import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    FormGroup,
    TextField,
    FormControlLabel,
    Checkbox,
    FormLabel,
    Grid,
    FormControl,
    Button,
} from "@material-ui/core";

import styles from "./SignIn.module.scss";

import { registration } from "../../store/loginSlice";
import Preloader from "../Preloader/Preloader";

toast.configure();

const SignUp = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const isLoading = useSelector((state) => state.loginData.isLoading);
    // const classes = useStyles();

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            rememberMe: false,
        },
        onSubmit: (values) => {
            dispatch(registration(values.name, values.email, values.password));
        },

        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = "Enter your login";
            } else if (!values.email) {
                errors.email = "Email is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                /*the address must contain the @ dot character and at least 2 domain letters after the dot*/
                errors.email = "Invalid email address";
            } else if (!values.password) {
                errors.password = "password is required";
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "confirmPassword is not valid";
            } else if (values.rememberMe === true) {
                setIsDisabled(false);
            }
            return errors;
        },
    });
    return (
        <>
            {isLoading ? (
                <div>
                    <Preloader />
                </div>
            ) : (
                <div className={styles.signInContainer}>
                    <Grid container justifyContent="center">
                        <Grid item xs={4}>
                            <form onSubmit={formik.handleSubmit}>
                                <FormControl>
                                    <FormLabel className={styles.formlabel}>
                                        To login to the game you must be registered. Please, create an account !
                                    </FormLabel>
                                    <FormGroup>
                                        <TextField
                                            id="name"
                                            label="Name"
                                            margin="normal"
                                            {...formik.getFieldProps("name")}
                                        />
                                        {formik.touched.name && formik.dirty && formik.errors.name && (
                                            <div className={styles.errorField}>{formik.errors.name}</div>
                                        )}
                                        <TextField
                                            id="email"
                                            label="Email"
                                            margin="normal"
                                            {...formik.getFieldProps("email")}
                                        />
                                        {formik.touched.email && formik.dirty && formik.errors.email && (
                                            <div className={styles.errorField}>{formik.errors.email}</div>
                                        )}
                                        <TextField
                                            label="Password"
                                            margin="normal"
                                            type="password"
                                            id="password"
                                            {...formik.getFieldProps("password")}
                                        />
                                        {formik.touched.password && formik.dirty && formik.errors.password && (
                                            <div className={styles.errorField}>{formik.errors.password}</div>
                                        )}
                                        <TextField
                                            label="Confirm Password"
                                            margin="normal"
                                            type="password"
                                            id="confirmPassword"
                                            {...formik.getFieldProps("confirmPassword")}
                                        />
                                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                            <div className={styles.errorField}>{formik.errors.confirmPassword}</div>
                                        )}
                                        <FormControlLabel
                                            className={styles.formControlLabel}
                                            label="Remember me"
                                            control={
                                                <Checkbox
                                                    name="rememberMe"
                                                    checked={formik.values.rememberMe}
                                                    onClick={() => formik.values.rememberMe === true}
                                                    {...formik.getFieldProps("rememberMe")}
                                                />
                                            }
                                        />
                                        <Button type={"submit"} className={styles.button} disabled={isDisabled}>
                                            Sign up
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
export default SignUp;
