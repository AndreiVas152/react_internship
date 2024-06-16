export interface LoginDto{
    password: string,
    email: string
}

export interface RegistrationDto extends  LoginDto{
    name: string,
}

export interface UserDto extends RegistrationDto {
    role: string
    id: string
}