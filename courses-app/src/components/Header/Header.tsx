import React from "react";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import Stack from "../common/Stack";

const Header: React.FC = () => {
    return (
        <Stack flexDirection={"row"}
               flex={'none'}
               style={{justifyContent: "space-between", alignContent: "center", padding: '15px 30px'}}>
            <Logo></Logo>
            <Button onClick={null}>LOGOUT</Button>
        </Stack>
    )
}

export default Header