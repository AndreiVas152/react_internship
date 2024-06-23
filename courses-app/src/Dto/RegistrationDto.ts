export interface LoginDto {
    password: string,
    email: string
}

export interface RegistrationDto extends LoginDto {
    name: string,
}

export interface LoginResultDto {
    name: string,
    email: string,
    token: string,
}