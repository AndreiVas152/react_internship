import React from "react";
import {useParams} from "react-router";
import {CourseInfo} from "../../index";
import {CourseDto} from "../../../Dto/CourseDto";

interface Props{
    courses: CourseDto[]
}

const CourseInfoWrapper : React.FC<Props> = ({courses}) => {
    const {courseId} = useParams()
    const course = courses.find(c=> c.id === courseId)

    return <CourseInfo course={course}></CourseInfo>
}

export default CourseInfoWrapper