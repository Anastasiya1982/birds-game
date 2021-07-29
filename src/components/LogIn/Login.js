import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

import style from "./LogIn.module.scss";
import {useFormik} from "formik";

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

const LogIn = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            email:"",
            password:"",
            confirmPassword:"",
            rememberMe:false
        },
        onSubmit:values => {
            alert(JSON.stringify(values));
        },
        validate:(values)=>{
            const errors = {};
            if (!values.email) {
                errors.email ="Email is required" ;
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email ="Invalid email address" ;
            }
            else if(!values.password ){
                errors.password="password is required";
            }
            else if(values.password !== values.confirmPassword){
                errors.confirmPassword="confirmPassword is not valid";
            }
            return errors;
        }

    });

    return (
        <div className={style.loginContainer}>
            <Grid container justify="center">
                <Grid item xs={4}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel className={classes.formLabel}>Please, fill out the registration form</FormLabel>
                            <FormGroup>
                                <TextField
                                    label="Email"
                                    margin="normal"
                                    {...formik.getFieldProps("email")}/>
                                {formik.errors.email ? <div className={style.errorField}>{formik.errors.email}</div> : null}
                                <TextField
                                    label="Password"
                                    margin="normal"
                                    type="password"
                                    {...formik.getFieldProps("password")}/>
                                {formik.errors.password ? <div className={style.errorField}>{formik.errors.password}</div> : null}
                                <TextField
                                    label="Confirm Password"
                                    margin="normal"
                                    type="password"
                                    {...formik.getFieldProps("confirmPassword")}/>
                                {formik.errors.confirmPassword ? <div className={style.errorField}>{formik.errors.confirmPassword}</div> : null}
                                <FormControlLabel className={classes.formControlLabel}
                                                  label="Remember me"
                                                  control={<Checkbox name="rememberMe"
                                                                     checked={formik.values.rememberMe}
                                                                     {...formik.getFieldProps("rememberMe")}
                                                  />}
                                />
                                <Button type={"submit"} className={classes.button}> LogIn</Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};
export default LogIn;
