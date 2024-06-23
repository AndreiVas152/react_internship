import {PropsWithChildren} from "react";
import {useAppSelector} from "../../hooks/hooks";
import {Navigate} from "react-router";
import React from "react";

export const PrivateRoute: React.FC<PropsWithChildren> = ({children}) => {

    const {role: userRole} = useAppSelector(state => state.user)

    if(!userRole || userRole !== "admin"){
        return <Navigate to={"/courses"}/>
    }

    return(
        <>{children}</>
    )

}