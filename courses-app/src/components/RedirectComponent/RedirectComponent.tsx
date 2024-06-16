import React from "react";
import {Navigate} from "react-router";

const RedirectComponent: React.FC = () => {


    const accessToken = localStorage.getItem("accessToken")

    return(
        <Navigate to={accessToken? "/courses" : "/login"} replace={true}/>
    )
}

export default RedirectComponent