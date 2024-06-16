import React, {createContext, PropsWithChildren, useCallback, useContext, useEffect, useState} from "react";
import axios from "axios";
import {UserInfoDto} from "../Dto/UserInfoDto";

interface IUserContext {
    name: string
    authenticated: boolean
    authenticate: (name: string) => void
    logout: () => void
}

const defaultUserContext: IUserContext = {
    name: "", authenticated: false, authenticate: () => {
    }, logout: () => {
    }
}

const UserContext = createContext<IUserContext>(defaultUserContext)

export const useUserContext = () => {
    return useContext(UserContext)
}


export const UserContextProvider: React.FC<PropsWithChildren> = ({children}) => {

    const [name, setName] = useState<string>("")
    const [authenticated, setAuthenticated] = useState<boolean>(false)
    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                if (accessToken) {
                    const response = await axios.get("http://localhost:4000/users/me", {
                        headers: {
                            Authorization: accessToken
                        }
                    })
                    authenticate(response?.data.result.name)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getUserInfo()
    }, [])

    const authenticate = useCallback((name: string) => {
        setAuthenticated(true)
        setName(name)
    }, [setAuthenticated, setName])

    const logout = useCallback(() => {
        setAuthenticated(false)
        setName("")
    }, [setAuthenticated, setName])

    return <UserContext.Provider value={{
        name, authenticated, authenticate, logout
    }}>{children}</UserContext.Provider>
}