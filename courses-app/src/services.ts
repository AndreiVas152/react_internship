import {CourseDto, CreateCourseDto} from "./Dto/CourseDto";
import axios from "axios";
import {LoginDto, LoginResultDto, RegistrationDto, UserInfoDto} from "./Dto/RegistrationDto";
import {AuthorDto} from "./Dto/AuthorDto";
import {number} from "prop-types";

const BASE_URL = "http://localhost:4000"

export const loginService = async (details: LoginDto) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email: details.email,
            password: details.password
        })
        if (response.data.successful) {
            localStorage.setItem("accessToken", response.data.result)
            return {
                name: response.data.user.name,
                email: response.data.user.email,
                token: response.data.result,
                role: null
            }
        }
    } catch (error) {
        console.log("Login failed")
    }
}

export const getUserInfoService = async (accessToken: string): Promise<UserInfoDto> => {
    try {
        if (accessToken) {
            const response = await axios.get(`${BASE_URL}/users/me`, {
                headers: {
                    Authorization: accessToken
                }
            })

            return response.data.result as UserInfoDto
        }
    } catch (error) {
        console.log(error)
    }
}

export const logoutService = async () => {
    const accessToken = localStorage.getItem("accessToken")
    try {
        console.log(await axios.delete(`${BASE_URL}/logout`, {headers: {Authorization: accessToken}}))

        localStorage.clear()
    } catch (error) {
        console.log(error)
    }
}

export const fetchCoursesService = async (): Promise<CourseDto[]> => {

    try {
        const response = await axios.get(`${BASE_URL}/courses/all`)

        return response.data.result as CourseDto[];
    } catch (error) {
        console.log(error)
    }
}

export const addCourseService = async (course: CreateCourseDto): Promise<CourseDto> => {
    try {
        const accessToken = localStorage.getItem("accessToken")

        const response = await axios.post(`${BASE_URL}/courses/add`, {
            title: course.title,
            description: course.description,
            duration: course.duration,
            authors: course.authors,
        }, {
            headers: {
                Authorization: accessToken
            }
        })

        return response.data.result as CourseDto
    } catch (error) {
        console.log(error)
    }
}

export const fetchAuthorsService = async (): Promise<AuthorDto[]> => {

    try {
        const response = await axios.get(`${BASE_URL}/authors/all`)

        return response.data.result as AuthorDto[];
    } catch (error) {
        console.log(error)
    }
}

export const registerService = async (details: RegistrationDto): Promise<boolean> => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, {
            name: details.name,
            email: details.email,
            password: details.password
        })
        return !!response.data.successful;
    } catch (error) {
        console.log(error)
    }
}

export const deleteCourseService = async (courseId: string) : Promise<boolean> => {
    const accessToken = localStorage.getItem("accessToken")
    try{

        const response = await axios.delete(`${BASE_URL}/courses/${courseId}`, {headers: {Authorization: accessToken}})
        return response.data.successful

    }catch (error){
        console.log(error)
    }
}

export const addAuthorService = async (author: string) : Promise<AuthorDto> => {
    try {
        const accessToken = localStorage.getItem("accessToken")
        const response = await axios.post(`${BASE_URL}/authors/add`, {
            name: author
        }, {
            headers: {
                Authorization: accessToken
            }
        })

        return response.data.result as AuthorDto
    } catch (error) {
        console.log(error)
    }
}

export const deleteAuthorService = async (authorId: string) : Promise<boolean> => {
    try{
        const accessToken = localStorage.getItem("accessToken")

        const response = await axios.delete(`${BASE_URL}/authors/${authorId}`, {headers: {Authorization: accessToken}})
        return response.data.successful

    }catch (error){
        console.log(error)
    }
}


