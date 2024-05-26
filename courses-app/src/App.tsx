import React, {Fragment} from "react";
import Header from "./components/Header/Header";
import CourseCard from "./components/Courses/components/CourseCard/CourseCard";
import {mockedCoursesList} from "./Assets/mockedCoursesList";

function App() {
    return (
        <Fragment>
            <Header></Header>

            {mockedCoursesList.map(u => <CourseCard id={u.id} title={u.title} description={u.description}
                                                    creationDate={u.creationDate} duration={u.duration}
                                                    authors={u.authors}/>)}
        </Fragment>

    )
}

export default App;