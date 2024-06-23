import React from "react";
import GetCourseDuration from "../../../../helpers/getCourseDuration";
import Button from "../../../../common/Button/Button";
import {CourseDto} from "src/Dto/CourseDto"
import Stack from "../../../../common/Stack/Stack";
import Typography from "../../../../common/Typography/Typography";
import GetAuthorNames from "../../../../helpers/getAuthorNames";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import TrashIcon from "../../../../common/Button/Icons/TrashIcon";
import EditIcon from "../../../../common/Button/Icons/EditIcon";
import {deleteCourseThunk} from "../../../../store/courses/thunks";

interface Props {
    course: CourseDto,
}


const CourseCard: React.FC<Props> = ({course}) => {
    const navigate = useNavigate()
    const {authors} = useAppSelector(state => state.authors)
    const {role: userRole} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

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
                            style={{whiteSpace: 'nowrap'}}>{GetAuthorNames(course.authors, authors)}</Typography>
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
                    <Stack style={{marginTop: 32}} flexDirection={"row"}>
                        <Button style={{marginRight: 8}} onClick={() => navigate(`/courses/${course.id}`)}>Show
                            Course</Button>

                        {userRole && userRole === "admin" &&
                            <>
                                <Button variant={'icon'} style={{marginRight: 8}}
                                        onClick={() => dispatch(deleteCourseThunk(course.id))}>
                                    <TrashIcon/>
                                </Button>
                                <Button variant={'icon'}><EditIcon/></Button>
                            </>}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CourseCard