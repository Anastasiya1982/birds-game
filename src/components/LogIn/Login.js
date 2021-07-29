import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

import style from "./LogIn.module.scss";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

const useStyles = makeStyles({
    formLabel: {
        margin: "0 0 30px 0",
        color:"#008966",
        textAlign:"center"
    },
    formControlLabel:{
        color: "#008966"
    },
    button:{
        background: "linear-gradient(45deg, #008966 30%,  #00BC8C 90%)",
        border: 0,
        borderRadius: 5,
        color:"white",
        width:120,
        height: 40,
        padding: "0 30px",
        margin: "20px auto",
        "&:hover": {
            background:  "linear-gradient(45deg, #006B4A 30%,  #008E5F 90%)"
        },

    }

});

const LogIn=()=>{
    const classes = useStyles();
    return(
        <div className={style.loginContainer}>
            <Grid container justify="center">
                <Grid item xs={4}>
                    <FormControl>
                        <FormLabel className={classes.formLabel}>Please, fill out the registration form</FormLabel>
                        <FormGroup>
                            <TextField label="Email" margin="normal"/>
                            <TextField label="Password" margin="normal" type="password"/>
                            <TextField label="Confirm Password" margin="normal" type="password"/>
                            <FormControlLabel className={classes.formControlLabel}
                                              label="Remember me"
                                              control={
                                                  <Checkbox name="rememberMe"/>
                                              }
                            />
                            <Button type={"submit"} className={classes.button}> LogIn</Button>

                        </FormGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    );
};
export default LogIn;
