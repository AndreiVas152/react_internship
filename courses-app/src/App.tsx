import React, {useCallback, useState} from "react";
import {mockedAuthorsList, mockedCoursesList} from "./Assets/mockedCoursesList";
import Stack from "./common/Stack/Stack";
import {CourseDto} from "./Dto/CourseDto";
import {CourseInfo, Courses, EmptyCourseList, Login, Registration, Header, CreateCourse} from "./components"


function App() {
    const [selectedCourse, setSelectedCourse] = useState<CourseDto | null>(null)
    const [courses, setCourses] = useState<CourseDto[]>(mockedCoursesList)

    const onAddNewCourse = useCallback((a: CourseDto) => {
        setCourses([...courses, a])
    }, [setCourses, courses]);

    return (
        <Stack style={{width: '100vw', height: '100vh'}}>
            <Header/>
            <Courses courses={courses} selectedCourse={selectedCourse} onShowCourse={setSelectedCourse}/>
            <EmptyCourseList visible={!courses || !courses.length}/>
            <CourseInfo course={selectedCourse} onBack={() => {
                setSelectedCourse(null)
            }}/>
            <Registration/>
            <Login/>
            <CreateCourse onAddNewCourse={onAddNewCourse} allAuthors={mockedAuthorsList}/>
        </Stack>
    )
}

export default App;