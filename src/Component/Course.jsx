import CourseCard from "./CourseCard";


const Course = () => {
    const courseList = [
        {
            img: "/src/assets/html.png",
            courseName: 'HTML',
            duration: "2h 30min",
            modulenum: "45",
            project: "12",
            price: "$12"
        },
        {
            img: "/src/assets/css.png",
            courseName: 'CSS',
            duration: "1h 30min",
            modulenum: "12",
            project: "22",
            price: "$19"
        },
        {
            img: "/src/assets/tailwin.png",
            courseName: 'Tailwind CSS',
            duration: "1h 45min",
            modulenum: "12",
            project: "18",
            price: "$18"
        },
        {
            img: "/src/assets/js.png",
            courseName: 'JavaScript',
            duration: "4h 30min",
            modulenum: "30",
            project: "20",
            price: "$35"
        },
        {
            img: "/src/assets/react.png",
            courseName: 'React',
            duration: "6h 30min",
            modulenum: "35",
            project: "35",
            price: "$50"
        },
        {
            img: "/src/assets/bg.jpg",
            courseName: 'VS Code & Git & Git Hub',
            duration: "1h 47min",
            modulenum: "15",
            project: "2",
            price: "$8"
        }
    ]
    return (
        <div className="my-6 w-9/12 mx-auto ">
            <h1 className="text-3xl text-emerald-600 font-bold mb-5">Course List</h1>
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {courseList.map((course, id) => (
                    <CourseCard key={id} course={course}/>
                ))}

            </div>
        </div>
    );
};

export default Course