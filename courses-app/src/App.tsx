import React, {useEffect} from "react";
import Stack from "./common/Stack/Stack";
import {Courses, Login, Registration, Header, RedirectComponent} from "./components"
import {Route, Routes} from "react-router";
import CourseInfoWrapper from "./components/CourseInfo/CourseInfoWrapper/CourseInfoWrapper";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {fetchCoursesThunk} from "./store/courses/thunks";
import {fetchAuthorsThunk} from "./store/authors/thunks";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import CourseForm from "./components/CourseForm/CourseForm";
import {CourseFormWrapper} from "./components/CourseForm/CourseFormWrapper";


function App() {
    const {courses} = useAppSelector(state => state.courses);
    const dispatch = useAppDispatch()
    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchCoursesThunk())
            dispatch(fetchAuthorsThunk())
        }
    }, [])

    return (
        <Stack style={{width: '100vw', height: '100vh'}}>
            <Header/>
            <Routes>
                <Route path="/" element={<RedirectComponent/>}/>
                <Route path="/courses" element={<Courses courses={courses}/>}/>
                <Route path="/courses/:courseId"
                       element={<CourseInfoWrapper courses={courses}/>}/>
                <Route path="/courses/add"
                       element={
                           <PrivateRoute>
                               <CourseForm/>
                           </PrivateRoute>}/>
                <Route path={"/courses/update/:courseId"}
                       element={<PrivateRoute>
                           <CourseFormWrapper/>
                       </PrivateRoute>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/*" element={<RedirectComponent/>}/>
            </Routes>
        </Stack>
    )
}

export default App;