import {CourseActionTypes} from "./types";
import {CoursesAction} from "./actions";
import {CourseDto} from "../../Dto/CourseDto";

export interface ICourseState {
    courses: CourseDto[];
}

export const coursesInitialState: ICourseState = {
    courses: [],
}

export const coursesReducer = (state: ICourseState = coursesInitialState, action: CoursesAction) => {
    switch (action.type) {

        case CourseActionTypes.ADD_COURSE:
            return {...state, courses: [...state.courses, action.payload]};

        case CourseActionTypes.DELETE_COURSE:
            return {...state, courses: state.courses.filter(course => course.id !== action.payload)};

        case CourseActionTypes.SAVE_COURSES:
            return {...state, courses: action.payload};

        case CourseActionTypes.FETCH_COURSES:
            return {...state, courses: action.payload}

        default:
            return state
    }
}