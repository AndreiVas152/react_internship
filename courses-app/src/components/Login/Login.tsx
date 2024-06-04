import React, {useState} from "react";
import Validation from "../../helpers/Validation";
import {Button, Stack, TextInput, Typography} from "../../common";


const Login :React.FC = () => {

    interface LoginFormValues {
        email: string,
        password: string
    }

    interface LoginFormErrors {
        email?: string,
        password?: string
    }

    const [formValues, setFormValues] = useState<LoginFormValues>({} as LoginFormValues)
    const [errors, setErrors] = useState<LoginFormErrors>({})

    const handleChange = (event) => {
        const target = event.target

        setFormValues({...formValues, [target.name]: target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors({})
        const currentErrors: LoginFormErrors = {
            email: Validation.email(formValues.email),
            password: Validation.password(formValues.password)
        }
        setErrors(currentErrors)
        if(!Object.values(currentErrors).every(value => value === undefined)){
            return
        }
        console.log(`Successfully logged in user ${formValues.email}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack style={{padding: 150}}>
                <h3>Login</h3>
                <TextInput name={'email'}
                           errorText={errors.email}
                           onChange={handleChange}
                           label={'Email'}
                           placeholder={'please enter your email'}/>
                <TextInput name={'password'}
                           errorText={errors.password}
                           type={'password'}
                           onChange={handleChange}
                           label={'Password'}
                           placeholder={'please enter your password'}/>
                <Button style={{marginBottom: 16}} type={'submit'}>Login</Button>
                <Typography>If you do not have an account you may <a style={{fontWeight: 700, color: 'black'}} href={'/register'}>Register</a>.</Typography>
            </Stack>
        </form>
    )
}

export default Login