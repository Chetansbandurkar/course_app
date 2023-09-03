import React, { useState } from "react";
import Card from "./Card";
const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikeCourses] = useState([]);
    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(coursesData => {
                    allCourses.push(coursesData);
                })
            })
            return allCourses;
        }
        else{
            // mai sirf specific categery ka array return karunga4
            return courses[category];
        }
    }


    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => (
                    <Card key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLikeCourses={setLikeCourses} />
                ))
            }
        </div>
    )
}
export default Cards