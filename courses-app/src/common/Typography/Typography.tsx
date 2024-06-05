import React from "react";
import {PropsWithChildren} from "react";

interface TypographyProps extends PropsWithChildren {
    style?: React.CSSProperties
}


const Typography: React.FC<TypographyProps> = ({children, style}) => {
    return (
        <span style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: '100%',
            fontSize: 11,
            margin: 0,
            ...style
        }}>{children}
        </span>
    )
}

export default Typography