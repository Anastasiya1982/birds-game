import React from "react";
import Grid from "@material-ui/core/Grid";
import {useFormik} from "formik";
import { FormControl,Button, FormLabel, FormGroup, TextField,makeStyles } from "@material-ui/core";

import style from "./Account.module.scss";

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

const Account = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        onSubmit:values => {
            alert(JSON.stringify(values));
        },
        validate:(values)=>{
            const errors = {};
            if (!values.email) {
                errors.email ="Email is required" ;
            }
            else if(!values.password ){
                errors.password="password is required";
            }
            return errors;
        }
    });

    return (
        <div className={style.loginContainer}>
            <Grid container justifyContent="center">
                <Grid item xs={4}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel className={classes.formLabel}>Please, enter your email and password... if you are not registered, Sign Up ! </FormLabel>
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

                                <Button type={"submit"} className={classes.button}> LogIn</Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};
export default Account;
