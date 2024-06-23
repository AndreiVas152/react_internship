import React, {useState} from "react"
import {Button, Stack, TextInput, Typography} from "../../common";
import Validation from "../../helpers/Validation";
import {Link, useNavigate} from "react-router-dom";
import {RegistrationDto} from "../../Dto/RegistrationDto";
import {registerService} from "../../services";

interface RegistrationProps {

}

interface RegistrationFormErrors {
    userName?: string,
    email?: string,
    password?: string
}

const Registration: React.FC<RegistrationProps> = () => {

    const [formValues, setFormValues] = useState<RegistrationDto>({} as RegistrationDto)
    const [errors, setErrors] = useState<RegistrationFormErrors>({})
    const navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target

        setFormValues({...formValues, [target.name]: target.value})
    }

    const handleSubmit = async (event) => {

        event.preventDefault()
        setErrors({})
        const currentErrors: RegistrationFormErrors = {
            userName: Validation.userName(formValues.name),
            email: Validation.email(formValues.email),
            password: Validation.password(formValues.password)
        }
        console.log(formValues)
        setErrors(currentErrors)
        if (!Object.values(currentErrors).every(value => value === undefined)) {
            return
        }
        const response = await registerService(formValues)
        if(response){
            navigate("/login", {replace: true})
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <Stack style={{padding: 150}}>
                <h3>Register</h3>
                <TextInput name={'name'}
                           errorText={errors.userName}
                           onChange={handleChange}
                           label={'Name'}
                           placeholder={'please enter your name'}
                />
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
                <Button style={{marginBottom: 16}} type={'submit'}>Register</Button>
                <Typography>If you have an account you may <Link style={{fontWeight: 700, color: 'black'}}
                                                                 to={'/login'}>Log in</Link>.</Typography>
            </Stack>
        </form>
    )
}

export default Registration