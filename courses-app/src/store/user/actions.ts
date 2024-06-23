import {LoginResultDto, UserInfoDto} from "../../Dto/RegistrationDto";
import {AuthActionTypes} from "./types";
import {Action} from "redux";

export type UserAction = ISetUserInfoAction | ILogoutAction | ILoginAction

interface ILoginAction extends Action {
    type: AuthActionTypes.LOGIN
    payload: LoginResultDto
}

interface ISetUserInfoAction extends Action {
    type: AuthActionTypes.GET_INFO
    payload: UserInfoDto
}

interface ILogoutAction extends Action {
    type: AuthActionTypes.LOGOUT
}

export const loginAction = (user: LoginResultDto): ILoginAction => ({
    type: AuthActionTypes.LOGIN,
    payload: user
})

export const setUserInfoAction = (user: UserInfoDto): ISetUserInfoAction => ({
    type: AuthActionTypes.GET_INFO,
    payload: user
})

export const logoutAction = (): ILogoutAction => ({
    type: AuthActionTypes.LOGOUT
})