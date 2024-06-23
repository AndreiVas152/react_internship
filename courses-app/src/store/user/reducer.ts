import {UserAction} from "./actions";
import {AuthActionTypes} from "./types";

interface IUserState {
    isAuthenticated: boolean,
    name: string,
    email: string,
    token: string
}

const initialState: IUserState = {
    isAuthenticated: false,
    name: '',
    email: '',
    token: ''
}

export const userReducer = (state: IUserState = initialState, action: UserAction) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                email: action?.payload?.email,
                name: action?.payload?.name,
                token: action?.payload?.token
            }
        case AuthActionTypes.LOGOUT:
            return initialState;
        default:
            return state
    }
}
