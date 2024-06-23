export interface CourseDto{
    id: string
    title: string,
    description: string,
    creationDate: string,
    duration: number,
    authors: string[],
}

export interface CreateCourseDto{
    title: string
    description: string
    duration: number
    authors: string[]
}