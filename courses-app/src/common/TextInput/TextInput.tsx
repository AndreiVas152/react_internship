import React, {HTMLInputTypeAttribute} from "react";
import Stack from "../Stack/Stack";
import Typography from "../Typography/Typography";

interface TextInputProps {
    label: string
    type?: HTMLInputTypeAttribute | 'textArea'
    min?: number
    errorText?: string
    name?: string
    value?: string | number,
    placeholder?: string
    isDisabled?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const TextInput: React.FC<TextInputProps> = ({
                                                 label,
                                                 placeholder,
                                                 isDisabled,
                                                 onChange,
                                                 name,
                                                 errorText,
                                                 value,
                                                 type,
                                                 min
                                             }) => {

    return (
        <Stack style={{marginBottom: 8}}>
            <label>
                <Stack>
                    <Typography style={{marginBottom: 4, fontWeight: 700}}>{label}</Typography>
                    {type === "textArea" ?
                        <textarea placeholder={placeholder}
                                  onChange={onChange}
                                  name={name}
                                  disabled={isDisabled}
                                  value={value}
                                  style={{
                                      borderColor: errorText ? '#FF0000' : '#CFCFCF',
                                      borderRadius: 3,
                                      borderWidth: 1,
                                  }} rows={6}/>
                        : <input
                            name={name}
                            type={type ? type : 'text'}
                            min={min}
                            placeholder={placeholder}
                            disabled={isDisabled}
                            onChange={onChange}
                            value={value}
                            style={{
                                borderColor: errorText ? '#FF0000' : '#CFCFCF',
                                borderRadius: 3,
                                borderWidth: 1,
                                width: 280,
                                height: 30
                            }}
                        />}
                </Stack>
            </label>
            <Typography style={{
                color: "#FF0000",
                visibility: errorText ? 'visible' : 'hidden',
                display: 'flex',
                height: 16,
                marginTop: 4
            }}>{errorText}</Typography>
        </Stack>
    )
}

export default TextInput