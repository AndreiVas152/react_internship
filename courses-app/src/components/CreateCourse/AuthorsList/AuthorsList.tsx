import {AuthorDto} from "../../../Dto/AuthorDto";
import React, { useCallback, useState} from "react";
import generateGUID from "../../../helpers/generateGUID";
import {AuthorItem, Button, Stack, TextInput} from "../../../common";
import Validation from "../../../helpers/Validation";

interface AuthorListProps {
    allAuthors: AuthorDto[],
    onCreateAuthor: (a: AuthorDto) => void
    onAuthorSelected: (a: AuthorDto) => void
}


const AuthorsList: React.FC<AuthorListProps> = ({allAuthors, onCreateAuthor, onAuthorSelected}) => {
    const [newAuthorName, setNewAuthorName] = useState<string>('')
    const [error, setError] = useState<string | null>(null);

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setNewAuthorName(event.target.value)
    }, [setNewAuthorName])


    const handleAddNewAuthor = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const currentError = Validation.author(newAuthorName)
        setError(currentError)
        if (currentError) {
            return false;
        }
        const newAuthor = {
            id: generateGUID(),
            name: newAuthorName
        };
        onCreateAuthor(newAuthor);
        setNewAuthorName('')
        return false;
    }, [ newAuthorName, onCreateAuthor]);

    return <Stack>
        <h3>Authors</h3>
        <Stack style={{flexDirection: 'row'}}>
            <TextInput name={'author'}
                       value={newAuthorName} label={'Author Name'}
                       placeholder={'please input author name'}
                       errorText={error}
                       onChange={onChange}/>
            <Button onClick={handleAddNewAuthor}>Add Author</Button>
        </Stack>
        <h3>Authors List</h3>
        {allAuthors && allAuthors.map(a => <AuthorItem author={a} key={a.id} onAdd={onAuthorSelected}/>)}
    </Stack>
}

export default AuthorsList