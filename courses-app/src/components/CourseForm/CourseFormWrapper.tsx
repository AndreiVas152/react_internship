import React from "react";
import {useParams} from "react-router";
import {useAppSelector} from "../../hooks/hooks";
import CourseForm from "./CourseForm";


export const CourseFormWrapper : React.FC = () => {

    const {courseId : courseToUpdateId} = useParams<{ courseId: string }>()

    const {courses} = useAppSelector(state => state.courses)

    const courseToUpdate = courses.find(c=> c.id === courseToUpdateId)

    return <CourseForm courseToUpdate={courseToUpdate}></CourseForm>
}