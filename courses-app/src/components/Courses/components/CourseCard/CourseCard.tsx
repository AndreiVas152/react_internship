import React, {Fragment} from "react";
import {mockedAuthorsList} from "../../../../Assets/mockedCoursesList";
import GetCourseDuration from "../../../../helpers/getCourseDuration";
import Button from "../../../../common/Button/Button";

interface CourseProps {
    id: string,
    title: string,
    description: string,
    creationDate: string,
    duration: number,
    authors: string[],
}

export default function CourseCard({id, title, description, creationDate, duration, authors}: CourseProps) {

    return (
        <Fragment>
            <ul>
                <h3 style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>{title}</h3>
                <ul style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
                  <h6 style={{display: 'flex', flex: 6}}>{description}</h6>
                    <ul style={{display: 'flex', flexDirection: 'column', flex: 4}}>
                        <h6>Authors: {[...authors]}</h6>
                        <h6>Duration: {GetCourseDuration(duration)}</h6>
                        <h6>Created: {creationDate}</h6>
                        <ul style={{display: 'flex', flexDirection: 'row'}}>
                            <Button>Get Courses</Button>
                        </ul>
                    </ul>
                </ul>
            </ul>
        </Fragment>
    )
}