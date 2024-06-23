import {LoginResultDto} from "../../Dto/RegistrationDto";
import {AuthActionTypes} from "./types";
import {Action} from "redux";

export type UserAction = ISetUserInfoAction | ILogoutAction

interface ISetUserInfoAction extends Action {
    type: AuthActionTypes.LOGIN
    payload: LoginResultDto
}

interface ILogoutAction extends Action {
    type: AuthActionTypes.LOGOUT
}


export const setUserInfoAction = (user: LoginResultDto): ISetUserInfoAction => ({
    type: AuthActionTypes.LOGIN,
    payload: user
})

export const logoutAction = (): ILogoutAction => ({
    type: AuthActionTypes.LOGOUT
})