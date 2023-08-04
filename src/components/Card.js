import React from 'react' ; 
import {FcLike,FcLikePlaceholder} from "react-icons/fc" ; 
import {toast} from "react-toastify"; 


const Card = (props) => {

    let course = props.course ; 
    let likedCourses = props.likedCourses ; 
    let setLikedCourses = props.setLikedCourses ; 


    // ON CLICKING OF THE LIKE BUTTON 
    function likeHandler()
    {
        // PEHLE SE LIKE HAI , AB DESLIKE KARNA HAI 
        if(likedCourses.includes(course.id))
        {
            // LIKED COURSES KI LIST SE REMOVE KARO 
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id))) ; 
            toast.warning("like Removed") ; 
        }
        
        // AB LIKE KARNA HAI 
        else
        {
            if(likedCourses.length === 0)
            {
                setLikedCourses([course.id]) ; 
            }

            // previous ko copy kar dega , aur isko bhi daal dega 
            else
            {
                setLikedCourses((prev) => [...prev , course.id]) ; 
            }

            toast.success("Liked Successfully") ; 
        }
    }



    return (

        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden ">

            <div className="relative">

                {/* IMAGE OF THE CARD */}
                <img src={course.image.url} />

                {/* LIKE WALA BUTTON AND USKA PARENT */}
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">

                    <button onClick={likeHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />) 
                        }
                    </button>
                </div>

            </div>

            <div className="p-4">
                
                {/* HEADING OF THE CARD  */}
                <p className="text-white font-semibold text-2xl pb-2 leading-6 ">{course.title}</p>

                {/* DESCRIPTION OF THE CARD  */}
                <p  className="mt-2 text-white">
                    {
                        course.description
                    }
                </p>


            </div>
            
            





        </div>



    )


}


export default Card  ;