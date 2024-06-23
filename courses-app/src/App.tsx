import React, {useCallback, useEffect} from "react";
import Stack from "./common/Stack/Stack";
import {CourseDto} from "./Dto/CourseDto";
import {Courses, Login, Registration, Header, CreateCourse, RedirectComponent} from "./components"
import { Route, Routes} from "react-router";
import CourseInfoWrapper from "./components/CourseInfo/CourseInfoWrapper/CourseInfoWrapper";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {fetchCoursesThunk} from "./store/courses/thunks";
import {fetchAuthorsThunk} from "./store/authors/thunks";
import {addCourseAction} from "./store/courses/actions";




function App() {
    const {courses} = useAppSelector(state => state.courses);
    const {authors} = useAppSelector(state => state.authors);
    const dispatch = useAppDispatch()
    const accessToken = localStorage.getItem("accessToken")

    useEffect(()=> {
        if(accessToken){
            dispatch(fetchCoursesThunk())
            dispatch(fetchAuthorsThunk())
        }
    }, [])



    const onAddNewCourse = useCallback((a: CourseDto) => {
        dispatch(addCourseAction(a))
    }, [courses]);

    return (
        <Stack style={{width: '100vw', height: '100vh'}}>
            <Header/>
            <Routes>
                <Route path="/" element={<RedirectComponent/>} />
                <Route path="/courses" element={<Courses courses={courses}/>}/>
                <Route path="/courses/:courseId"
                       element={<CourseInfoWrapper courses={courses} />}/>
                <Route path="/courses/add"
                       element={<CreateCourse onAddNewCourse={onAddNewCourse} allAuthors={authors}/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/*" element={<RedirectComponent/>}/>
            </Routes>
        </Stack>
    )
}

export default App;