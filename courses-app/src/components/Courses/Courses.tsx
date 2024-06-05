import React, {useCallback, useEffect, useState} from "react";
import {Button, Stack} from "../../common";
import {CourseDto} from "../../Dto/CourseDto";
import {CourseCard, SearchBar} from "../index";

interface CoursesProps {
    courses: CourseDto[],
    selectedCourse: CourseDto | null,
    onShowCourse: (course: CourseDto) => void
}

const Courses: React.FC<CoursesProps> = ({courses, selectedCourse, onShowCourse}) => {

    const [filteredCourses, setFilteredCourses] = useState(courses)
    const [search, setSearch] = useState('')

    const filterCourses = useCallback(() => {
        if (!search) {
            setFilteredCourses(courses)
        } else {
            const normalizedSearchTerm = search.toLowerCase()
            const searchedCourses = courses.filter(course => course.id.toLowerCase().includes(normalizedSearchTerm) ||
                course.description.toLowerCase().includes(normalizedSearchTerm) ||
                course.title.toLowerCase().includes(normalizedSearchTerm)
            )
            setFilteredCourses(searchedCourses)
        }
    }, [search, courses]);

    useEffect(()=> {
        filterCourses()
    }, [courses, filterCourses])



    if (selectedCourse || !courses?.length) {
        return null;
    }
    return (
        <Stack style={{paddingLeft: 150, paddingRight: 150}}>
            <SearchBar filterCourses={filterCourses} onChange={setSearch} search={search}></SearchBar>
            <Button style={{alignSelf: 'flex-end', marginBottom: 32}}>ADD NEW COURSE</Button>
            {filteredCourses.map(c => <CourseCard key={c.id} onShowCourse={onShowCourse} course={c}/>)}
        </Stack>
    )
}

export default Courses