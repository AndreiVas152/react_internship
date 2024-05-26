import React, {PropsWithChildren} from "react"

interface ButtonProps extends PropsWithChildren{
    onClick?: () => {}
}

export default function Button({onClick, children}: ButtonProps) {
    return (
        <button style={{display: 'flex', alignSelf: 'center', backgroundColor: '#007298', width: 140, height: 40, borderRadius: 4, borderWidth: 0}} type={"button"} onClick={onClick}>
            <h4 style={{color: '#FFFFFF', fontWeight: 700, display: 'flex', flex: 1, alignSelf: 'center', justifyContent: 'center'}} >
                {children}
            </h4>
        </button>
    )
}

