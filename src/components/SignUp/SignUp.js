import React from "react";
import {FormGroup,TextField,FormControlLabel,Checkbox,makeStyles} from "@material-ui/core";
import {FormLabel,Grid,FormControl,Button} from "@material-ui/core";
import {useFormik} from "formik";

import style from "./SignIn.module.scss";

const useStyles = makeStyles({
    formLabel: {
        margin: "0 0 30px 0",
        color: "#008966",
        textAlign: "center"
    },
    formControlLabel: {
        color: "#008966"
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
            background: "linear-gradient(45deg, #006B4A 30%,  #008E5F 90%)"
        },
    }
});

const SignUp = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            rememberMe: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            } else if (!values.password) {
                errors.password = "password is required";
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "confirmPassword is not valid";
            }
            return errors;
        }

    });
    return (
        <div className={style.signInContainer}>
            <Grid container justifyContent="center">
                <Grid item xs={4}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel className={classes.formLabel}>To login to the game you must be registered. Please, create an account !
                            </FormLabel>
                            <FormGroup>
                                <TextField label="Email"
                                           margin="normal"
                                           {...formik.getFieldProps("email")}/>
                                {formik.errors.email ?
                                    <div className={style.errorField}>{formik.errors.email}</div> : null}
                                <TextField label="Password"
                                           margin="normal"
                                           type="password"
                                           {...formik.getFieldProps("password")}/>
                                {formik.errors.password ?
                                    <div className={style.errorField}>{formik.errors.password}</div> : null}
                                <TextField label="Confirm Password"
                                           margin="normal"
                                           type="password"
                                           {...formik.getFieldProps("confirmPassword")}/>
                                {formik.errors.confirmPassword ?
                                    <div className={style.errorField}>{formik.errors.confirmPassword}</div> : null}
                                <FormControlLabel className={classes.formControlLabel}
                                                  label="Remember me"
                                                  control={
                                                      <Checkbox name="rememberMe"
                                                                checked={formik.values.rememberMe}
                                                                {...formik.getFieldProps("rememberMe")}
                                                      />
                                                  }
                                />
                                <Button type={"submit"} className={classes.button}>Sign up</Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};
export default SignUp;
