import {AuthorsActionTypes} from "./types";
import {AuthorsAction} from "./actions";
import {AuthorDto} from "../../Dto/AuthorDto";

export interface IAuthorState {
    authors: AuthorDto[];
}

export const authorsInitialState: IAuthorState = {
    authors: [],
}

export const authorsReducer = (state: IAuthorState = authorsInitialState, action: AuthorsAction) => {
    switch (action.type) {

        case AuthorsActionTypes.ADD_AUTHOR:
            return {...state, authors: [...state.authors, action.payload]};

        case AuthorsActionTypes.DELETE_AUTHOR:
            return {...state, authors: state.authors.filter(author => author.id !== action.payload)};

        case AuthorsActionTypes.SAVE_AUTHORS:
            return {...state, authors: action.payload};

        case AuthorsActionTypes.FETCH_AUTHORS:
            return {...state, authors: action.payload}

        default:
            return state
    }
}