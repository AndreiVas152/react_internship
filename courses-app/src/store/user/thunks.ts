import {LoginDto, LoginResultDto, UserInfoDto} from "../../Dto/RegistrationDto";
import {getUserInfoService, loginService, logoutService} from "../../services";
import {loginAction, logoutAction, setUserInfoAction, UserAction} from "./actions";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../index";
import {fetchCoursesThunk} from "../courses/thunks";

type UserThunk = ThunkDispatch<RootState, unknown, UserAction>

export const loginThunk = (dto: LoginDto) => async (dispatch: UserThunk) => {
    const response: LoginResultDto = await loginService(dto)
    dispatch(loginAction(response))
    await dispatch(getUserInfoThunk(response.token))
    dispatch(fetchCoursesThunk())
}

export const getUserInfoThunk = (accessToken: string) => async (dispatch: UserThunk) => {
    const response: UserInfoDto = await getUserInfoService(accessToken)
    dispatch(setUserInfoAction(response))
}

export const logoutThunk = () => async (dispatch: UserThunk) => {
    await logoutService()
    dispatch(logoutAction())
}