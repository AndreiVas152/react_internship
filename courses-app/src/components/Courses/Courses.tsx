import React, {useCallback, useEffect, useState} from "react";
import {Button, Stack} from "../../common";
import {CourseDto} from "../../Dto/CourseDto";
import {CourseCard, EmptyCourseList, SearchBar} from "../index";
import {useNavigate} from "react-router-dom";

interface CoursesProps {
    courses: CourseDto[],
}

const Courses: React.FC<CoursesProps> = ({courses}) => {
    const [filteredCourses, setFilteredCourses] = useState(courses)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

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



    if (!courses?.length) {
        return (
            <EmptyCourseList/>
        )
    }
    return (
        <Stack style={{paddingLeft: 150, paddingRight: 150}}>
            <SearchBar filterCourses={filterCourses} onChange={setSearch} search={search}></SearchBar>
            <Button style={{alignSelf: 'flex-end', marginBottom: 32}} onClick={() =>{navigate("/courses/add", {replace: true})}}>ADD NEW COURSE</Button>
            {filteredCourses.map(c => <CourseCard key={c.id} course={c}/>)}
        </Stack>
    )
}

export default Courses