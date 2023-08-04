import React from 'react'
import Card from './Card';
import { useState } from 'react';


const Cards = (props) => {

    const courses = props.courses ; 
    let allCourse = [] ; 
    let category = props.category ; 


    // LIST OF LIKED COURSES . 
    const [likedCourses , setLikedCourses] = useState([]) ; 

    

    // YAH SARE TYPR KE COURSES KO AIK SINGLE ARRAY MAI DAAL DETA HAI 
    function getCourses()
    {
        
        // AGAR CATEGORY ALL HAI , TO SABKO AIK SINGLE LIST MAI LENA PADEGA . 
        if(category === 'All')
        {
                // OBJECT KI HAR CAEGORY , KE HAR COURSE KO AIK ARRAY MAI PUSH . 
                Object.values(courses).forEach((courseCategory) => {

                courseCategory.forEach((course) => {
                
                    allCourse.push(course) ; 
                })
            })

            return allCourse ; 
        }
        
        // OTHER WISE HUM SPECIFIC CAEGORY KO LE LENGE 
        else
        {
            return courses[category] ; 
        }

    }



    return (

        <div className="flex flex-wrap justify-center gap-6 mb-4 px-80">

            {
                getCourses().map( (course) => {
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }

        </div>

    ) 

}


export default Cards ; 