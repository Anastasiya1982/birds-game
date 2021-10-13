import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { PhotoCamera } from "@material-ui/icons";
import { FormControl, Button, Box, Grid, IconButton, FormGroup, TextField, makeStyles } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

import { setAvatar, updateUser } from "../../store/loginSlice";

import style from "./Account.module.scss";

const useStyles = makeStyles({
    formLabel: {
        margin: "0 0 30px 0",
        color: "#008966",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
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
    box: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    formControl: {
        fullWidth: "true",
        width: "100%",
    },
    userInput: {
        position: "relative",
    },
    span: {
        color: "black",
    },
    downloadInput: {
        display: "none",
    },
    cameraIcon: {
        fill: "#008966",
    },
    updateNameIcon: {
        fill: "#008966",
        position: "absolute",
        top: "10%",
        right: 16,
        cursor: "pointer",
        fontSize: 22,
    },
    updateEmailIcon: {
        fill: "#008966",
        position: "absolute",
        top: "35%",
        right: 16,
        cursor: "pointer",
        fontSize: 22,
    },
    userPassword: {
        position: "relative",
        autocomplete: "off",
    },
    buttonBack: {
        width: 80,
        height: 50,
        border: 0,
        borderRadius: 5,
        color: "white",
        background: "linear-gradient(45deg, #008966 30%,  #00BC8C 90%)",
        marginLeft: "88%",
        "&:hover": {
            background: "linear-gradient(45deg, #006B4A 30%,  #008E5F 90%)",
        },
        cursor: "pointer",
    },
    updateAvatarButton: {
        width: 80,
        height: 30,
        border: 0,
        borderRadius: 5,
        color: "white",
        background: "linear-gradient(45deg, #008966 30%,  #00BC8C 90%)",
        margin: "20px auto",
        "&:hover": {
            background: "linear-gradient(45deg, #006B4A 30%,  #008E5F 90%)",
        },
        cursor: "pointer",
    },
    updatePasswordIcon: {
        fill: "#008966",
        position: "absolute",
        top: "60%",
        right: 16,
        cursor: "pointer",
        fontSize: 22,
    },
});

const Account = () => {
    const userPhoto = useSelector((state) => state.loginData.userAvatar);
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = useSelector((state) => state.loginData.user);
    const [img, setImg] = useState(userPhoto);
    const [isDisable, setIsDisable] = useState(true);
    const history = useHistory();

    const goToPlay = () => {
        history.push("/");
    };

    const formik = useFormik({
        initialValues: {
            userName: user["name"],
            userEmail: user["email"],
            password: "",
            userId: user["id"],
        },
        onSubmit: (values) => {
            dispatch(updateUser(values.userId, values.userName, values.userEmail, values.password));
        },
        validate: (values) => {
            const errors = {};
            if (formik.touched.userName && formik.values.userName !== user["name"]) {
                setIsDisable(false);
            }
            if (formik.touched.userEmail && !formik.values.userEmail) {
                setIsDisable(false);
            }
            if (values.password !== "" && values.password !== user["password"]) {
                setIsDisable(false);
            }
            return errors;
        },
    });

    const onSetUserPhotoToAvatar = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setImg(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const changeAvatar = () => {
        dispatch(setAvatar({ data: img }));
        toast("You change your avatar");
    };

    return (
        <div className={style.accountContainer}>
            <Button onClick={goToPlay} className={classes.buttonBack}>
                Back to Game
            </Button>
            <Grid container justifyContent="center">
                <Grid item xs={8}>
                    <div className={classes.formLabel}>Personal info</div>
                    <div className={classes.box}>
                        <div className={style.avatarInfo}>
                            <img src={img} className={style.avatarImg} alt="userAvatar" />
                            <Box component="span" m={1} className={classes.span}>
                                Your avatar
                            </Box>
                        </div>
                        <input
                            accept="image/*"
                            className={classes.downloadInput}
                            id="icon-button-file"
                            name="image"
                            type="file"
                            onChange={onSetUserPhotoToAvatar}
                        />
                        <label htmlFor="icon-button-file">
                            <IconButton aria-label="upload picture" component="span">
                                <PhotoCamera className={classes.cameraIcon} />
                            </IconButton>
                        </label>
                        <button onClick={changeAvatar} className={classes.updateAvatarButton}>
                            save Image
                        </button>
                    </div>
                    <form onSubmit={formik.handleSubmit} className={style.form}>
                        <FormControl className={classes.formControl}>
                            <FormGroup>
                                <TextField
                                    className={classes.userInput}
                                    label="User name"
                                    margin="normal"
                                    {...formik.getFieldProps("userName")}
                                />
                                <CreateIcon className={classes.updateNameIcon} />
                                <TextField
                                    className={classes.userInput}
                                    label="User email"
                                    margin="normal"
                                    {...formik.getFieldProps("userEmail")}
                                />
                                {formik.dirty && formik.errors.email && (
                                    <div className={style.errorField}>{formik.errors.email}</div>
                                )}
                                <CreateIcon className={classes.updateEmailIcon} />
                                <TextField
                                    className={classes.userPassword}
                                    label="Password"
                                    autocomplete="off"
                                    margin="normal"
                                    type="password"
                                    {...formik.getFieldProps("password")}
                                />
                                <CreateIcon className={classes.updatePasswordIcon} />
                                <Button type={"submit"} className={classes.button} disabled={isDisable}>
                                    Update
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};
export default Account;
