import {AuthorDto} from "../Dto/AuthorDto";

const GetAuthorNames = (authors: string[], mockedAuthorsList: AuthorDto[]) : string => {
    return mockedAuthorsList
        .filter(author => authors.includes(author.id))
        .map(author => author.name)
        .join(', ')
}

export default GetAuthorNames