import React, {useState} from "react";
import Validation from "../../helpers/Validation";
import {Button, Stack, TextInput, Typography} from "../../common";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {LoginDto} from "../../Dto/RegistrationDto";
import { useUserContext} from "../../context/userContext";

const Login: React.FC = () => {

    const userContext = useUserContext()

    interface LoginFormErrors {
        email?: string,
        password?: string
    }

    const [formValues, setFormValues] = useState<LoginDto>({} as LoginDto)
    const [errors, setErrors] = useState<LoginFormErrors>({})
    const navigate = useNavigate()

    const handleChange = (event) => {
        const target = event.target

        setFormValues({...formValues, [target.name]: target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrors({})
        const currentErrors: LoginFormErrors = {
            email: Validation.email(formValues.email),
            password: Validation.password(formValues.password)
        }
        setErrors(currentErrors)
        if (!Object.values(currentErrors).every(value => value === undefined)) {
            return
        }
        try {
            const response= await axios.post('http://localhost:4000/login', {
                email: formValues.email,
                password: formValues.password
            })
            if (response.data.successful) {
                console.log(response)
                localStorage.setItem("accessToken", response.data.result)
                userContext.authenticate(response.data.user.name)
                navigate("/courses", {replace: true})
            }
        }   catch(error){console.log("Login failed")}
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
                <Typography>If you do not have an account you may <Link style={{fontWeight: 700, color: 'black'}}
                                                                        to={'/registration'}>Register</Link>.</Typography>
            </Stack>
        </form>
    )
}

export default Login