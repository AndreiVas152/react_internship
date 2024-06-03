import React from "react";
import {Button, Stack} from "../../common";
import {CourseDto} from "../../Dto/CourseDto";
import {CourseCard} from "../index";

interface CoursesProps {
    courses: CourseDto[],
    selectedCourse: CourseDto | null,
    onShowCourse: (course: CourseDto) => void
}

const Courses: React.FC<CoursesProps> = ({courses, selectedCourse, onShowCourse}) => {
    if (selectedCourse || !courses?.length) {
        return null;
    }

    return (
        <Stack style={{paddingLeft: 150, paddingRight: 150}}>
            <Button style={{alignSelf: 'flex-end', marginBottom: 32}}>ADD NEW COURSE</Button>
            {courses.map(c => <CourseCard key={c.id} onShowCourse={onShowCourse} course={c}/>)}
        </Stack>
    )
}

export default Courses