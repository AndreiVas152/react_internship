import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../index";
import {addAuthorAction, AuthorsAction, deleteAuthorAction, fetchAuthorsAction} from "./actions";
import {addAuthorService, deleteAuthorService, fetchAuthorsService} from "../../services";
import {AuthorDto} from "../../Dto/AuthorDto";

type AuthorsThunk = ThunkDispatch<RootState, unknown, AuthorsAction>

export const fetchAuthorsThunk = () => async (dispatch: AuthorsThunk) => {
    const response: AuthorDto[] = await fetchAuthorsService()

    dispatch(fetchAuthorsAction(response))
}

export const addAuthorThunk = (author: string) => async (dispatch: AuthorsThunk) => {
    const response: AuthorDto = await addAuthorService(author)

    if (response)
        dispatch(addAuthorAction(response))
}

export const deleteAuthorThunk = (authorId: string) => async (dispatch: AuthorsThunk) => {
    const success: boolean = await deleteAuthorService(authorId)

    if (success)
        dispatch(deleteAuthorAction(authorId))
}