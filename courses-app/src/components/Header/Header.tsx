import React from "react";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import Stack from "../../common/Stack/Stack";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {Typography} from "../../common";
import {useUserContext} from "../../context/userContext";



const Header: React.FC = () => {
    const userContext = useUserContext()
    const navigate = useNavigate()
    const location = useLocation()

    const accessToken = localStorage.getItem("accessToken")

    const logout = async () => {
        await axios.delete("http://localhost:4000/logout", {headers: {Authorization: (accessToken.replace("bearer ", ""))}})
        localStorage.removeItem("accessToken")
        userContext.logout()
        navigate("/login")
    }


    return (
        <Stack flexDirection={"row"}
               flex={'none'}
               style={{justifyContent: "space-between", alignContent: "center", padding: '15px 30px'}}>
            <Logo></Logo>
            <Stack style={{alignItems: "center"}} flex={"none"} flexDirection={'row'}>
                {(userContext.name && location.pathname !== "/login" && location.pathname !== "/registration") ? (
                    <><Typography
                        style={{marginRight: 16, fontWeight: 700, fontSize: 16}}>Welcome, {userContext.name}</Typography>
                        <Button onClick={() => logout()}>LOGOUT</Button>
                    </>) : null
                }
            </Stack>
        </Stack>
    )
}

export default Header