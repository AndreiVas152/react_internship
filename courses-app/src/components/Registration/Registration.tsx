import React, {useState} from "react"
import {Button, Stack, TextInput} from "../../common";
import Validation from "../../helpers/Validation";

interface RegistrationProps {

}

interface RegistrationFormValues {
    userName: string,
    email: string,
    password: string
}

interface RegistrationFormErrors {
    userName?: string,
    email?: string,
    password?: string
}

const Registration: React.FC<RegistrationProps> = () => {

    const [formValues, setFormValues] = useState<RegistrationFormValues>({} as RegistrationFormValues)
    const [errors, setErrors] = useState<RegistrationFormErrors>({})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target

        setFormValues({...formValues, [target.name]: target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors({})
        const currentErrors: RegistrationFormErrors = {
            userName: Validation.userName(formValues.userName),
            email: Validation.email(formValues.email),
            password: Validation.password(formValues.password)

        }
        setErrors(currentErrors)
        if(!Object.values(currentErrors).every(value => value === undefined)){
            return
        }
        console.log('Successfully created user!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack style={{padding: 150}}>
                <h3>Register</h3>
                <TextInput name={'userName'}
                           value={formValues.userName}
                           errorText={errors.userName}
                           onChange={handleChange}
                           label={'Name'}
                           placeholder={'please enter your name'}
                />
                <TextInput name={'email'}
                           value={formValues.email}
                           errorText={errors.email}
                           onChange={handleChange}
                           label={'Email'}
                           placeholder={'please enter your email'}/>
                <TextInput name={'password'}
                           value={formValues.password}
                           errorText={errors.password}
                           type={'password'}
                           onChange={handleChange}
                           label={'Password'}
                           placeholder={'please enter your password'}/>
                <Button type={'submit'}>Register</Button>
            </Stack>
        </form>
    )
}

export default Registration