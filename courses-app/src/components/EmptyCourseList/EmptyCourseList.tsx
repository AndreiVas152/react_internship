import React from "react";
import Button from "../../common/Button/Button";
import Stack from "../../common/Stack/Stack";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooks";
import {Typography} from "../../common";


const EmptyCourseList: React.FC = () => {

    const navigate = useNavigate()
    const {role: userRole} = useAppSelector(state => state.user)

    return (

        <Stack style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F7F7F7'
        }}>
            <h3 style={{fontWeight: 500}}>Your List Is Empty</h3>
            <h6 style={{fontWeight: 100}}>Please use {'Add New Course'} button to add your first course</h6>

            {(userRole && userRole === "admin") ? <Button onClick={() => {
                navigate("/courses/add", {replace: true})
            }}>ADD NEW COURSE</Button>
                : <Typography>
                    You don't have permission to create a course. Please login as Admin
                </Typography>}
        </Stack>

    )
}

export default EmptyCourseList