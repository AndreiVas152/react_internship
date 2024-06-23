import React, {useState} from "react";
import Validation from "../../helpers/Validation";
import {Button, Stack, TextInput, Typography} from "../../common";
import {Link, useNavigate} from "react-router-dom";
import {LoginDto} from "../../Dto/RegistrationDto";
import {loginThunk} from "../../store/user/thunks";
import {useAppDispatch} from "../../hooks/hooks";

const Login: React.FC = () => {
    interface LoginFormErrors {
        email?: string,
        password?: string
    }

    const [formValues, setFormValues] = useState<LoginDto>({} as LoginDto)
    const [errors, setErrors] = useState<LoginFormErrors>({})
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

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
        dispatch(loginThunk(formValues))
        navigate("/courses", {replace: true})
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