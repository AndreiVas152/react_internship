import {AuthorDto} from "../../../Dto/AuthorDto";
import AuthorItem from "../AuthorItem/AuthorItem";
import {Stack} from "../../../common";
import React from "react";

interface CourseAuthorsProps{
    courseAuthors: AuthorDto[]
    onRemove: (author: AuthorDto) => void
}

const CourseAuthors: React.FC<CourseAuthorsProps> = ({courseAuthors, onRemove}) =>{
    return(
        <Stack>
            {
                courseAuthors.map(a => <AuthorItem author={a} key={a.id} onRemove={onRemove}/>)
            }
        </Stack>
    )
}

export default CourseAuthors