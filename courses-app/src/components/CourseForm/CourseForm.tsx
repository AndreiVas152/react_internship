import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Button, Stack, TextInput, Typography} from "../../common";
import {AuthorDto} from "../../Dto/AuthorDto";
import Validation from "../../helpers/Validation";
import CourseAuthors from "./CourseAuthors/CourseAuthors";
import AuthorsList from "./AuthorsList/AuthorsList";
import GetCourseDuration from "../../helpers/getCourseDuration";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {addCourseThunk, updateCourseThunk} from "../../store/courses/thunks";
import {addAuthorThunk} from "../../store/authors/thunks";
import {CourseDto} from "../../Dto/CourseDto";


interface CourseFormProps {
    courseToUpdate?: CourseDto
}

interface CreateCourseFormValues {
    title: string
    description: string
    duration: number
    authors: string[]
}

interface CreateCourseFormErrors {
    title?: string
    description?: string
    duration?: string
    author?: string
}

const CourseForm: React.FC<CourseFormProps> = ({courseToUpdate}) => {

    const {authors: authorsList} = useAppSelector(state => state.authors)

    const [formValues, setFormValues] = useState<CreateCourseFormValues>({
        title: '',
        authors: [],
        description: '',
        duration: 0
    })
    const [errors, setErrors] = useState<CreateCourseFormErrors>({})
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (courseToUpdate) {
            setFormValues({
                title: courseToUpdate.title,
                authors: courseToUpdate.authors,
                description: courseToUpdate.description,
                duration: courseToUpdate.duration
            })
        }
    }, [])


    const handleChange = (event) => {
        const target = event.target
        setFormValues({...formValues, [target.name]: target.value})
    }

    const availableAuthors = useMemo(() => {
        if (formValues.authors) {
            return authorsList.filter(a => formValues.authors.every(fa => fa !== a.id));
        }

    }, [authorsList, formValues.authors]);

    const courseAuthors = useMemo(() => {
        if (formValues.authors)
            return authorsList.filter(a => formValues.authors.some(id => id === a.id));
    }, [authorsList, formValues.authors])

    const onAdd = useCallback((a: AuthorDto) => {
        setFormValues(prev => ({
            ...prev,
            authors: [...prev.authors, a.id]
        }))
    }, [setFormValues]);

    const onRemove = useCallback((a: AuthorDto) => {
        setFormValues(prev => ({
            ...prev,
            authors: prev.authors.filter(id => id !== a.id)
        }))
    }, [setFormValues]);

    const onAuthorCreated = useCallback((authorName: string) => {
        dispatch(addAuthorThunk(authorName))
    }, [authorsList, setFormValues]);

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors({})
        const currentErrors: CreateCourseFormErrors = {
            title: Validation.title(formValues.title),
            description: Validation.description(formValues.description),
            duration: Validation.duration(formValues.duration)
        }
        setErrors(currentErrors)
        if (!Object.values(currentErrors).every(value => value === undefined)) {
            return
        }
        const courseToDispatch = {
            title: formValues.title,
            authors: formValues.authors,
            duration: Number(formValues.duration),
            description: formValues.description,
        }

        if (courseToUpdate) {
            console.log(`updating course ${courseToUpdate.title}`)
            dispatch(updateCourseThunk({
                ...courseToDispatch,
                id: courseToUpdate.id,
                creationDate: courseToUpdate.creationDate
            }))
        } else {
            dispatch(addCourseThunk(courseToDispatch))
        }
        navigate("/courses")
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack style={{padding: '0 150px 0 150px'}} flexDirection={'row'}>
                <Stack flex={1} flexDirection={'column'}>
                    <h3>Main Info</h3>
                    <TextInput name={'title'} value={formValues.title} label={'Title'} placeholder={'input title'}
                               onChange={handleChange}
                               errorText={errors.title}/>
                    <TextInput name={'description'} value={formValues.description} label={'Description'}
                               placeholder={'input course description'}
                               type={'textArea'} errorText={errors.description} onChange={handleChange}/>
                    <h3>Duration</h3>
                    <Stack flexDirection={'row'} style={{justifyContent: 'flex-start'}}>
                        <TextInput type={'number'} name={'duration'} value={formValues.duration} label={'Duration'}
                                   min={0}
                                   placeholder={'Input duration'}
                                   errorText={errors.duration} onChange={handleChange}/>
                        <Typography>{GetCourseDuration(formValues.duration)}</Typography>
                    </Stack>
                    <AuthorsList allAuthors={availableAuthors} onAuthorSelected={onAdd}
                                 onCreateAuthor={onAuthorCreated}/>
                </Stack>
                <Stack flex={1}>
                    <CourseAuthors courseAuthors={courseAuthors} onRemove={onRemove}></CourseAuthors>
                </Stack>
            </Stack>
            <Stack flexDirection={'row'} style={{justifyContent: "flex-end", marginTop: 24}}>
                <Button style={{marginRight: 16}} onClick={() => navigate("/courses", {replace: true})}>Cancel</Button>
                <Button type={'submit'}>{courseToUpdate? "Update Course" : "Create Course"}</Button>
            </Stack>
        </form>
    )
}

export default CourseForm

