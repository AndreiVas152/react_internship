import React from "react";
import Stack from "../../common/Stack/Stack";
import Typography from "../../common/Typography/Typography";
import {CourseDto} from "../../Dto/CourseDto";
import Button from "../../common/Button/Button";
import GetCourseDuration from "../../helpers/getCourseDuration";
import GetAuthorNames from "../../helpers/getAuthorNames";
import {mockedAuthorsList} from "../../Assets/mockedCoursesList";


interface Props {
    course: CourseDto | null,
    onBack: () => void;
}

const CourseInfo: React.FC<Props> = ({ course, onBack}) => {
    if (!course) {
        return null;
    }
    return (
        <Stack style={{padding: '50px 150px', backgroundColor: '#F7F7F7'}}>
            <h3 style={{margin: '0px 0px 32px 0px'}}>{course.title}</h3>
            <Stack style={{
                paddingLeft: 64,
                paddingTop: 50,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#CFCFCF',
                backgroundColor: '#FFFFFF',
                boxShadow: '1px 1px 10px 1px grey'
            }}>
                <h4 style={{margin: 0}}>Description:</h4>
                <Stack flexDirection={'row'}>

                    <Typography style={{flex: 1}}>{course.description}</Typography>
                    <div style={{width: 1, backgroundColor: 'black', margin: '0px 32px 32px 32px'}}></div>
                    <Stack flexDirection={'column'} style={{flex: 1}}>
                        <Stack flexDirection={'row'}>
                            <Typography style={{fontWeight: 500}}>ID:&nbsp;</Typography>
                            <Typography>{course.id}</Typography>
                        </Stack>
                        <Stack flexDirection={'row'}>
                            <Typography style={{fontWeight: 500}}>Duration:&nbsp;</Typography>
                            <Typography>{GetCourseDuration(course.duration)}</Typography>
                        </Stack>
                        <Stack flexDirection={'row'}>
                            <Typography style={{fontWeight: 500}}>Created:&nbsp;</Typography>
                            <Typography>{course.creationDate}</Typography>
                        </Stack>
                        <Stack flexDirection={'row'}>
                            <Typography style={{fontWeight: 500}}>Authors:&nbsp;</Typography>
                            <Typography>{GetAuthorNames(course.authors, mockedAuthorsList)}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Button style={{alignSelf: 'flex-end', marginTop: 32}} onClick={onBack}>BACK</Button>
        </Stack>
    )
}

export default CourseInfo