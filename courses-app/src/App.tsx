import React, { useState} from "react";
import Header from "./components/Header/Header";
import {mockedCoursesList} from "./Assets/mockedCoursesList";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import Courses from "./components/Courses/Courses";
import Stack from "./components/common/Stack";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import {CourseDto} from "./DTO/CourseDto";


function App() {
    const [selectedCourse, setSelectedCourse] = useState<CourseDto | null>(null)
    const courseList = mockedCoursesList

    return (
        <Stack style={{width: '100vw', height: '100vh'}}>
            <Header></Header>
            <Courses courses={courseList} selectedCourse={selectedCourse} onShowCourse={setSelectedCourse}/>
            <EmptyCourseList visible={!courseList || !courseList.length}/>
            <CourseInfo course={selectedCourse} onBack={() => {
                setSelectedCourse(null)
            }}/>
        </Stack>
    )
}

export default App;