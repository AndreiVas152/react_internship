import {AuthorsActionTypes} from "./types";
import {Action} from "redux";
import {AuthorDto} from "../../Dto/AuthorDto";

interface IAddAuthorAction extends Action {
    type: AuthorsActionTypes.ADD_AUTHOR
    payload: AuthorDto
}

interface IDeleteAuthorsAction extends Action {
    type: AuthorsActionTypes.DELETE_AUTHOR
    payload: string
}

interface ISaveAuthorsAction extends Action {
    type: AuthorsActionTypes.SAVE_AUTHORS
    payload: AuthorDto[]
}

interface IFetchAuthors extends Action {
    type: AuthorsActionTypes.FETCH_AUTHORS
    payload: AuthorDto[]
}

export type AuthorsAction = IAddAuthorAction | IDeleteAuthorsAction | ISaveAuthorsAction | IFetchAuthors


export const addAuthorAction = (author: AuthorDto) : IAddAuthorAction => ({
    type: AuthorsActionTypes.ADD_AUTHOR,
    payload: author
})

export const deleteAuthorAction = (authorId: string) :IDeleteAuthorsAction => ({
    type: AuthorsActionTypes.DELETE_AUTHOR,
    payload: authorId
})

export const saveAuthorsAction = (authors: AuthorDto[]): ISaveAuthorsAction => ({
    type: AuthorsActionTypes.SAVE_AUTHORS,
    payload: authors
})

export const fetchAuthorsAction = (authors: AuthorDto[]): IFetchAuthors => ({
    type: AuthorsActionTypes.FETCH_AUTHORS,
    payload: authors
})
