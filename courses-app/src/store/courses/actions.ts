import {CourseActionTypes} from "./types";
import {CourseDto} from "../../Dto/CourseDto";
import {Action} from "redux";

interface IAddCourseAction extends Action {
    type: CourseActionTypes.ADD_COURSE
    payload: CourseDto
}

interface IDeleteCourseAction extends Action {
    type: CourseActionTypes.DELETE_COURSE
    payload: string
}

interface ISaveCoursesAction extends Action {
    type: CourseActionTypes.SAVE_COURSES
    payload: CourseDto[]
}

interface IFetchCourses extends Action {
    type: CourseActionTypes.FETCH_COURSES
    payload: CourseDto[]
}

export type CoursesAction = IAddCourseAction | IDeleteCourseAction | ISaveCoursesAction | IFetchCourses


export const addCourseAction = (course: CourseDto) : IAddCourseAction => ({
    type: CourseActionTypes.ADD_COURSE,
    payload: course
})

export const deleteCourseAction = (course: string) :IDeleteCourseAction => ({
    type: CourseActionTypes.DELETE_COURSE,
    payload: course
})

export const saveCoursesAction = (courses: CourseDto[]): ISaveCoursesAction => ({
    type: CourseActionTypes.SAVE_COURSES,
    payload: courses
})

export const fetchCoursesAction = (courses: CourseDto[]): IFetchCourses => ({
    type: CourseActionTypes.FETCH_COURSES,
    payload: courses
})
