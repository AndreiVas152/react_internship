import React from "react";
import Button from "../../common/Button/Button";
import Stack from "../../common/Stack/Stack";



const EmptyCourseList: React.FC = () => {


    return (

        <Stack style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F7F7F7'
        }}>
            <h3 style={{fontWeight: 500}}>Your List Is Empty</h3>
            <h6 style={{fontWeight: 100}}>Please use {'Add New Course'} button to add your first course</h6>
            <Button>ADD NEW COURSE</Button>
        </Stack>

    )
}

export default EmptyCourseList