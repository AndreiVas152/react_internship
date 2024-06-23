import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../index";
import {AuthorsAction, fetchAuthorsAction} from "./actions";
import {fetchAuthorsService} from "../../services";
import {AuthorDto} from "../../Dto/AuthorDto";

type AuthorsThunk = ThunkDispatch<RootState, unknown, AuthorsAction>

export const fetchAuthorsThunk = () => async (dispatch: AuthorsThunk) => {
    const response: AuthorDto[] = await fetchAuthorsService()

    dispatch(fetchAuthorsAction(response))
}