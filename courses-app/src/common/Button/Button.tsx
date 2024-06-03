import React, {PropsWithChildren} from "react"

interface ButtonProps extends PropsWithChildren {
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({onClick, style, children, type}) => {
    return (
        <button style={{
            display: 'flex',
            backgroundColor: '#007298',
            width: 140,
            height: 40,
            borderRadius: 4,
            borderWidth: 0,
            ...style
        }}
                type={type} onClick={onClick}>
            <h5 style={{
                color: '#FFFFFF',
                fontWeight: 700,
                display: 'flex',
                flex: 1,
                alignSelf: 'center',
                justifyContent: 'center'
            }}>
                {children}
            </h5>
        </button>
    )
}

export default Button
