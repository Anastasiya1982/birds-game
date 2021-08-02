import React, {useState} from "react";
import {useHistory} from "react-router";
import {useFormik} from "formik";

import {PhotoCamera} from "@material-ui/icons";
import {
    FormControl,
    Button,
    FormLabel,
    Box,
    Grid,
    IconButton,
    FormGroup,
    TextField,
    makeStyles
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

import style from "./Account.module.scss";
import defaultAvatar from "../../assets/image/userIcon.png";



const useStyles = makeStyles({
    formLabel: {
        margin: "0 0 30px 0",
        color: "#008966",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
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
    },
    box: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"

    },
    formControl: {
        fullWidth: "true",
        width: "100%"
    },
    userInput: {
        position: "relative",
    },
    span: {
        color: "black"
    },
    downloadInput: {
        display: "none"
    },
    cameraIcon: {
        fill: "#008966"
    },
    updateNameIcon: {
        fill: "#008966",
        position: "absolute",
        top: "41%",
        right: 16,
        cursor: "pointer",
        fontSize: 22
    },
    userPassword: {
        position: "relative"
    },
    updatePasswordIcon: {
        fill: "#008966",
        position: "absolute",
        top: "64%",
        right: 16,
        cursor: "pointer",
        fontSize: 22
    },
});

const Account = () => {
    const [userPhoto, setUserPhoto] = useState(defaultAvatar);

    const history = useHistory();
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
            userPhoto: userPhoto

        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            history.push("/");
        },
    });

    const onSetUserPhotoToAvatar = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setUserPhoto(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return (
        <div className={style.accountContainer}>
            <Grid container justifyContent="center">
                <Grid item xs={8}>
                    <form onSubmit={formik.handleSubmit} className={style.form}>
                        <FormControl className={classes.formControl}>
                            <FormLabel className={classes.formLabel}>Personal info</FormLabel>
                            <Box className={classes.box}>
                                <div className={style.avatarInfo}>
                                    <img src={userPhoto} className={style.avatarImg} alt="userAvatar"/>
                                    <Box component="span" m={1} className={classes.span}> Your avatar</Box>
                                </div>
                                <input accept="image/*" className={classes.downloadInput} id="icon-button-file"
                                       type="file" onChange={onSetUserPhotoToAvatar}/>
                                <label htmlFor="icon-button-file">
                                    <IconButton aria-label="upload picture" component="span">
                                        <PhotoCamera className={classes.cameraIcon}/>
                                    </IconButton>
                                </label>
                            </Box>
                            <FormGroup>
                                <TextField className={classes.userInput}
                                           label="User name"
                                           margin="normal"
                                           {...formik.getFieldProps("userName")}/>
                                <CreateIcon className={classes.updateNameIcon}/>
                                <TextField className={classes.userPassword}
                                           label="Password"
                                           margin="normal"
                                           type="password"
                                           {...formik.getFieldProps("password")}/>
                                <CreateIcon className={classes.updatePasswordIcon}/>
                                <Button type={"submit"} className={classes.button}> Update</Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};
export default Account;
