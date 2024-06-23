import React, {useEffect} from "react";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import Stack from "../../common/Stack/Stack";
import {useLocation, useNavigate} from "react-router-dom";
import {Typography} from "../../common";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getUserInfoThunk, logoutThunk} from "../../store/user/thunks";


const Header: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch();
    const {name: userName} = useAppSelector(state => state.user);
    const accessToken = localStorage.getItem("accessToken")

    useEffect(()=> {
        if(accessToken && !userName){
            dispatch(getUserInfoThunk(accessToken))
        }
    }, [])

    const logout = async () => {
        dispatch(logoutThunk());
        navigate("/login")
    }

    return (
        <Stack flexDirection={"row"}
               flex={'none'}
               style={{justifyContent: "space-between", alignContent: "center", padding: '15px 30px'}}>
            <Logo></Logo>
            <Stack style={{alignItems: "center"}} flex={"none"} flexDirection={'row'}>
                {(userName && location.pathname !== "/login" && location.pathname !== "/registration") ? (
                    <><Typography
                        style={{marginRight: 16, fontWeight: 700, fontSize: 16}}>Welcome, {userName}</Typography>
                        <Button onClick={() => logout()}>LOGOUT</Button>
                    </>) : null
                }
            </Stack>
        </Stack>
    )
}

export default Header