class Validation {

    static regEx = {
        userName: /^[A-Za-z]{3,}(?:\s[A-Za-z]{3,})?$/,
            // /^[a-zA-Z0-9]{3,}$/,
        email: /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        password: /^[A-Za-z0-9]{2,}$/,
            // /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/
        title: /\S{2}.*/,
        description: /\S{2}.*/,
        author: /\S{2}.*/,
        mustNotBeEmpty: /^\S+$/,
    }

    static userName(value: string): string {
        if(!value || !Validation.regEx.userName.test(value)){
            return 'Please enter a valid username'
        }
    }
    static email(value: string): string {
        if(!value || !Validation.regEx.email.test(value)){
            return 'Please enter a valid email address'
        }
    }
    static password(value: string): string {
        if(!value || !Validation.regEx.password.test(value)){
            return 'Please enter a valid password'
        }
    }
    static author(value: string): string {
        if(!value || !Validation.regEx.author.test(value)){
            return 'Author name should be at least 2 characters long'
        }
    }
    static title(value: string): string {
        if(!value || !Validation.regEx.title.test(value)){
            return 'Title should contain at least 2 characters'
        }
    }
    static description(value: string): string {
        if(!value || !Validation.regEx.description.test(value)){
            return 'Description should contain at least 2 characters'
        }
    }
    static duration(value: number): string {
        if(!value || value <= 0)
        {
            return 'Duration is required and must be a positive number'
        }
    }
}

export default Validation