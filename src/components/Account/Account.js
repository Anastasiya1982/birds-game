import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { PhotoCamera } from "@material-ui/icons";
import { FormControl, Button, Box, Grid, IconButton, FormGroup, TextField } from "@material-ui/core";

import { setAvatar, updateUser } from "../../store/loginSlice";

import styles from "./Account.module.scss";

const Account = () => {
    const userPhoto = useSelector((state) => state.loginData.userAvatar);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.loginData.user);
    const [img, setImg] = useState(userPhoto);
    const [isDisable, setIsDisable] = useState(true);
    const history = useHistory();

    const returnToGamePage = () => {
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
        <div className={styles.accountContainer}>
            <Button onClick={returnToGamePage} className={styles.buttonBack}>
                Back to Game
            </Button>
            <Grid container justifyContent="center">
                <Grid item xs={8}>
                    <div className={styles.formLabel}>Personal info</div>
                    <div className={styles.box}>
                        <div className={styles.avatarInfo}>
                            <img src={img} className={styles.avatarImg} alt="user Photo from account" />
                            <Box component="span" m={1} className={styles.span}>
                                Your avatar
                            </Box>
                        </div>
                        <input
                            accept="image/*"
                            className={styles.downloadInput}
                            id="icon-button-file"
                            name="image"
                            type="file"
                            onChange={onSetUserPhotoToAvatar}
                        />
                        <label htmlFor="icon-button-file">
                            <IconButton aria-label="upload picture" component="span">
                                <PhotoCamera className={styles.cameraIcon} />
                            </IconButton>
                        </label>
                        <button onClick={changeAvatar} className={styles.updateAvatarButton}>
                            save Image
                        </button>
                    </div>
                    <form onSubmit={formik.handleSubmit} className={styles.form}>
                        <FormControl className={styles.formControl}>
                            <FormGroup>
                                <TextField
                                    className={styles.userInput}
                                    label="User name"
                                    margin="normal"
                                    {...formik.getFieldProps("userName")}
                                />
                                <TextField
                                    className={styles.userInput}
                                    label="User email"
                                    margin="normal"
                                    {...formik.getFieldProps("userEmail")}
                                />
                                {formik.dirty && formik.errors.email && (
                                    <div className={styles.errorField}>{formik.errors.email}</div>
                                )}
                                <TextField
                                    className={styles.userPassword}
                                    label="Password"
                                    autocomplete="off"
                                    margin="normal"
                                    type="password"
                                    {...formik.getFieldProps("password")}
                                />
                                <Button type={"submit"} className={styles.button} disabled={isDisable}>
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
