import React from 'react';
import Auth from "./Auth";
import {makeStyles} from "@material-ui/core/styles";

const AuthContainer = () => {

    const useStyles = makeStyles((theme) => ({
        margin: {
            marginBottom: 10,
        },
    }));
    const classes = useStyles();


    return (
        <Auth/>
    );
};

export default AuthContainer;