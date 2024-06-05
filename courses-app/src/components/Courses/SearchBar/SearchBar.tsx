import React from "react";
import {Button, Stack, TextInput} from "../../../common";

interface SearchBarProps{
    filterCourses: () => void
    onChange: React.Dispatch<React.SetStateAction<string>>
    search: string
}

const SearchBar: React.FC<SearchBarProps> = ({filterCourses, search, onChange}) => {

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };



    return (
        <Stack flexDirection={'row'}>
            <TextInput onChange={handleInputChange} value={search} type={'search'} label={'Search Courses'}></TextInput>
            <Button onClick={filterCourses} style={{marginLeft: 24}}> Search</Button>
        </Stack>
    )
}

export default SearchBar