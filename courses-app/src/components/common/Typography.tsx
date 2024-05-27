import React from "react";
import {PropsWithChildren} from "react";

interface Props extends PropsWithChildren {
    style?: React.CSSProperties
}


const Typography: React.FC<Props> = ({children, style}) => {
    return (
        <span style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: '100%',
            fontSize: 11,
            margin: 0,
            ...style
        }}>{children}</span>
    )
}

export default Typography