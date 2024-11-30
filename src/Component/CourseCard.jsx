

const CourseCard = ({course}) => {
    
    return (
            <div className=" bg-white shadow-lg border rounded-lg text-black font-semibold p-6" >
                <div className="flex items-center justify-center ">
                    <img className="w-44 h-44" src={course.img} alt="" />
                </div>
                <h1 className="text-xl font-semibold">{course.courseName}</h1>
                <p>Course Duration: {course.duration}</p>
                <p>Number Of Module: {course.modulenum}</p>
                <p>Number Of Projects: {course.project}</p>
                <p>Course Price: {course.price}</p>
                <button className="bg-emerald-600 hover:bg-emerald-500 active:bg-red-600 text-white  px-4 py-2 rounded active:scale-95 mt-3">ENROLE NOW</button>
            </div>
    );
};

export default CourseCard;