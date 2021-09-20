import React, { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useFormik } from "formik";

import { FormGroup, TextField, FormControlLabel, Checkbox, makeStyles } from "@material-ui/core";
import { FormLabel, Grid, FormControl, Button } from "@material-ui/core";

import style from "./SignIn.module.scss";
import {registration} from "../../store/loginSlice";
import { toast } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";
import Preloader from "../Preloader/Preloader";

toast.configure();
const useStyles = makeStyles({
    formLabel: {
        margin: "0 0 30px 0",
        color: "#008966",
        textAlign: "center",
    },
    formControlLabel: {
        color: "#008966",
    },
    button: {
        background: "linear-gradient(45deg, #008966 30%,  #00BC8C 90%)",
        border: 0,
        borderRadius: 5,
        color: "white",
        width: 120,
        height: 40,
        padding: "0 30px",
        margin: "20px auto",
        "&:hover": {
            background: "linear-gradient(45deg, #006B4A 30%,  #008E5F 90%)",
        },
    },
});

const SignUp = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const isLoading=useSelector(state => state.loginData.isLoading);
    const classes = useStyles();

    const dispatch=useDispatch();

       const formik = useFormik({
        initialValues: {
            name:"",
            email: "",
            password: "",
            confirmPassword: "",
            rememberMe: false,
        },
        onSubmit: (values) => {
            dispatch(registration(values.name,values.email, values.password));
        },


        validate: (values) => {
            const errors = {};

            if(!values.name){
                errors.name="Enter your login"
            }
            else if (!values.email) {
                errors.email = "Email is required";
            } else
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
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
        <>{isLoading?<div><Preloader/></div> : (
            <div className={style.signInContainer}>

                <Grid container justifyContent="center">
                    <Grid item xs={4}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl>
                                <FormLabel className={classes.formLabel}>
                                    To login to the game you must be registered. Please, create an account !
                                </FormLabel>
                                <FormGroup>
                                    <TextField id="name" label="Name" margin="normal" {...formik.getFieldProps("name")} />
                                    {formik.touched.name&& formik.dirty && formik.errors.name ? (
                                        <div className={style.errorField}>{formik.errors.name}</div>
                                    ) : null}
                                    <TextField id="email" label="Email" margin="normal" {...formik.getFieldProps("email")} />
                                    {formik.touched.email&& formik.dirty && formik.errors.email ? (
                                        <div className={style.errorField}>{formik.errors.email}</div>
                                    ) : null}
                                    <TextField
                                        label="Password"
                                        margin="normal"
                                        type="password"
                                        id="password"
                                        {...formik.getFieldProps("password")}
                                    />
                                    {formik.touched.password&&formik.dirty && formik.errors.password ? (
                                        <div className={style.errorField}>{formik.errors.password}</div>
                                    ) : null}
                                    <TextField
                                        label="Confirm Password"
                                        margin="normal"
                                        type="password"
                                        id="confirmPassword"
                                        {...formik.getFieldProps("confirmPassword")}
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <div className={style.errorField}>{formik.errors.confirmPassword}</div>
                                    ) : null}
                                    <FormControlLabel
                                        className={classes.formControlLabel}
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
                                    <Button type={"submit"} className={classes.button} disabled={isDisabled} >
                                        Sign up
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </Grid>
                </Grid>
                {/*<ToastContainer autoClose={5000} />*/}
            </div>)}
        </>
    );
};
export default SignUp;
