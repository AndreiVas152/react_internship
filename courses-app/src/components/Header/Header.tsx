import React from "react";
import Logo from "./components/Logo/Logo";
import CoursesButton from "../../common/Button/Button";
import Button from "../../common/Button/Button";

export default function Header() {
    return (
        <>
            <header style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 30,
                paddingRight: 30
            }}>

                <Logo></Logo>
                <Button onClick={null}>LOGOUT</Button>
            </header>

        </>
    )
}