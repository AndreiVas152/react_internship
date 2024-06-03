import React, {PropsWithChildren} from "react";

interface StackProps extends PropsWithChildren {
    display?: 'flex' | 'box' | 'inline-flex',
    flex?: number | 'none' | 'auto' | 'content' | 'fit-content' | 'max-content' | 'min-content',
    flexDirection?: 'row' | 'column',
    style? :  React.CSSProperties
}

const Stack: React.FC<StackProps> = ({ children, display, flex, flexDirection, style}) => {
    return <div style={{
        ...style,
        display: display || 'flex',
        flex: flex !== undefined ? flex : 'auto',
        flexDirection: flexDirection || 'column',
    }}>
        {children}
    </div>
}

export default Stack