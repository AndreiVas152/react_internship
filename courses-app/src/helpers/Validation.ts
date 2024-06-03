class Validation {

    static regEx = {
        userName: /^\S+$/,
            // /^[a-zA-Z0-9]{3,}$/,
        email: /^\S+$/,
            // /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{+}$/,
        password: /^\S+$/,
            // /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/
        mustNotBeEmpty: /^\S+$/
    }

    static userName(value: string): string {
        if(!value || !Validation.regEx.userName.test(value)){
            return 'Please enter a valid username'
        }
    }
    static email(value: string): string {
        if(!value || !Validation.regEx.password.test(value)){
            return 'Please enter a valid email address'
        }
    }
    static password(value: string): string {
        if(!value || !Validation.regEx.userName.test(value)){
            return 'Please enter a valid password'
        }
    }
    static author(value: string): string {
        if(!value || !Validation.regEx.mustNotBeEmpty.test(value)){
            return 'Name is required'
        }
    }
    static title(value: string): string {
        if(!value || !Validation.regEx.mustNotBeEmpty.test(value)){
            return 'Title is required'
        }
    }
    static description(value: string): string {
        if(!value || !Validation.regEx.mustNotBeEmpty.test(value)){
            return 'Description is required'
        }
    }
    static duration(value: number): string {
        if(!value)
        {
            return 'Duration is required'
        }
    }
}

export default Validation