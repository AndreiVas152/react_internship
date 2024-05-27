import React from "react";
import {mockedAuthorsList} from "../../../../Assets/mockedCoursesList";
import GetCourseDuration from "../../../../helpers/getCourseDuration";
import Button from "../../../../common/Button/Button";
import {CourseDto} from "src/DTO/CourseDto"
import Stack from "../../../common/Stack";
import Typography from "../../../common/Typography";
import GetAuthorNames from "../../../../helpers/getAuthorNames";

interface Props {
    course: CourseDto,
    onShowCourse : (course: CourseDto)=>void;
}



const CourseCard: React.FC<Props> = ({course, onShowCourse}) => {
    return (
        <Stack flex={'none'} style={{
            backgroundColor: '#FFFFFF',
            marginBottom: 32,
            padding: 24,
            borderRadius: 8,
            boxShadow: '1px 1px 10px 1px grey'
        }}>
            <h3 style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}>{course.title}</h3>
            <Stack flexDirection={'row'}>
                <Stack flex={7} style={{marginRight: 48}}>
                    <Typography>{course.description}</Typography>
                </Stack>
                <Stack flex={3} style={{marginRight: 32, justifyContent: 'space-between'}}>
                    <Stack flex={0} flexDirection={'row'}>
                        <Typography
                            style={{fontWeight: 500}}>Authors:&nbsp;</Typography>
                        <Typography
                            style={{whiteSpace: 'nowrap'}}>{GetAuthorNames(course.authors, mockedAuthorsList)}</Typography>
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Typography
                            style={{fontWeight: 500}}>Duration:&nbsp;</Typography>
                        <Typography
                            style={{whiteSpace: 'nowrap'}}>{GetCourseDuration(course.duration)}</Typography></Stack>
                    <Stack flexDirection={'row'}>
                        <Typography
                            style={{fontWeight: 500}}>Created:&nbsp;</Typography>
                        <Typography
                            style={{whiteSpace: 'nowrap'}}>{course.creationDate}</Typography></Stack>
                    <Button style={{marginTop: 32}} onClick={()=>{
                        onShowCourse(course)
                    }}>Show Course</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CourseCard