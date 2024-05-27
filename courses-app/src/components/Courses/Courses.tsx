import React from "react";
import Button from "../../common/Button/Button";
import {CourseDto} from "../../DTO/CourseDto";
import CourseCard from "./components/CourseCard/CourseCard";
import Stack from "../common/Stack";
import CourseInfo from "../CourseInfo/CourseInfo";

interface Props {
    courses: CourseDto[],
    selectedCourse: CourseDto | null,
    onShowCourse: (course: CourseDto) => void
}

const Courses: React.FC<Props> = ({courses, selectedCourse, onShowCourse}) => {
    if (selectedCourse || !courses?.length) {
        return null;
    }

    return (
        <Stack style={{paddingLeft: 150, paddingRight: 150}}>
            <Button style={{alignSelf: 'flex-end', marginBottom: 32}}>ADD NEW COURSE</Button>
            {courses.map(c => <CourseCard onShowCourse={onShowCourse} course={c}/>)}
        </Stack>
    )
}

export default Courses