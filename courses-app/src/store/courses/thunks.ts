import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../index";
import {addCourseAction, CoursesAction, deleteCourseAction, fetchCoursesAction, updateCourseAction} from "./actions";
import {addCourseService, deleteCourseService, fetchCoursesService, updateCourseService} from "../../services";
import {CourseDto, CreateCourseDto} from "../../Dto/CourseDto";


type CoursesThunk = ThunkDispatch<RootState, unknown, CoursesAction>

export const fetchCoursesThunk = () => async (dispatch: CoursesThunk) => {
    const response: CourseDto[] = await fetchCoursesService()

    dispatch(fetchCoursesAction(response))
}

export const addCourseThunk = (course: CreateCourseDto) => async (dispatch: CoursesThunk) => {
    const response: CourseDto = await addCourseService(course)

    if (response)
        dispatch(addCourseAction(response))
}

export const deleteCourseThunk = (courseId: string) => async (dispatch: CoursesThunk) => {
    const success: boolean = await deleteCourseService(courseId)

    if (success)
        dispatch(deleteCourseAction(courseId))
}

export const updateCourseThunk = (courseToUpdate: CourseDto) => async (dispatch: CoursesThunk) => {
    console.log("thunk for course update")
    const response = await updateCourseService(courseToUpdate)

    if(response){
        dispatch(updateCourseAction(response))
    }

}