import React, {useCallback, useState} from "react";
import {mockedAuthorsList, mockedCoursesList} from "./Assets/mockedCoursesList";
import Stack from "./common/Stack/Stack";
import {CourseDto} from "./Dto/CourseDto";
import {Courses, Login, Registration, Header, CreateCourse, RedirectComponent} from "./components"
import { Route, Routes} from "react-router";
import CourseInfoWrapper from "./components/CourseInfo/CourseInfoWrapper/CourseInfoWrapper";




function App() {
    const [courses, setCourses] = useState<CourseDto[]>(mockedCoursesList)

    const onAddNewCourse = useCallback((a: CourseDto) => {
        setCourses([...courses, a])
    }, [setCourses, courses]);

    return (
        <Stack style={{width: '100vw', height: '100vh'}}>
            <Header/>
            <Routes>
                <Route path="/" element={<RedirectComponent/>} />
                <Route path="/courses" element={<Courses courses={courses}/>}/>
                <Route path="/courses/:courseId"
                       element={<CourseInfoWrapper courses={courses} />}/>
                <Route path="/courses/add"
                       element={<CreateCourse onAddNewCourse={onAddNewCourse} allAuthors={mockedAuthorsList}/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/*" element={<RedirectComponent/>}/>
            </Routes>
        </Stack>
    )
}

export default App;