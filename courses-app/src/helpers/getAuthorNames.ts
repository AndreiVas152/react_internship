import {AuthorDTO} from "../DTO/AuthorDTO";

const GetAuthorNames = (authors: string[], mockedAuthorsList: AuthorDTO[]) : string => {
    return mockedAuthorsList
        .filter(author => authors.includes(author.id))
        .map(author => author.name)
        .join(', ')
}

export default GetAuthorNames