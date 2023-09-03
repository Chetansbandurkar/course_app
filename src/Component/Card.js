
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from "react-toastify";
// overlap krne ke liye relative krna padega
const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikeCourses = props.setLikeCourses;

    function clickHandler() {
        // logic
        if (likedCourses.includes(course.id)) {
            // pahile se like hua he 
            setLikeCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like Removed");
        }
        else {
            // already liked nhi he 
            // insert kro liked coursde
            // /idhar ek hi card ata he isliye
            if (likedCourses.length === 0) {
                setLikeCourses([course.id]);
            }
            else {
                setLikeCourses((prev) => [...prev, course.id]);
            }

            toast.success("Like Successfully");
        }

    }
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md ">
            <div className="relative  ">
                <img src={course.image.url} alt={course.image.alt} />

                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ?
                                (<FcLike fontSize="1.75rem" />) :
                                (<FcLikePlaceholder fontSize="1.75rem" />)

                        }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                        course.description.length > 100 ?
                            (course.description.substr(0, 100))+"..." :
                            (course.description)
                    }
                </p>
            </div>

        </div>
    )
}

export default Card;