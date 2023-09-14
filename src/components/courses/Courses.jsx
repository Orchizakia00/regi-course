import { useEffect } from "react";
import { useState } from "react";
import Cart from "../cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleSelectBtn = (course) => {
        const isExist = selectedCourses.find((item) => item.id === course.id);
        if (isExist) {
            toast('Course is already selected. Try selecting another course.');
        }
        else {
            setSelectedCourses([...selectedCourses, course]);
        }
    }
    console.log(selectedCourses);

    return (
        <div className='flex mt-10'>
            <div className="grid grid-cols-3 gap-4 mx-4">
                {
                    courses.map((course) => (
                        <div key={course.id} className="bg-white p-5 rounded-xl w-96">
                            <img className="mx-auto w-full" src={course.img} alt="" />
                            <p className="text-center my-2 font-bold text-xl">{course.title}</p>
                            <p>{course.details}</p>
                            <div className="flex justify-between my-4">
                                <p>Price: ${course.price}</p>
                                <p>Credit: {course.credit}hr</p>
                            </div>
                            <button onClick={() => handleSelectBtn(course)} className="w-full bg-blue-600 text-white rounded-xl p-1">Select</button>

                            <ToastContainer />
                        </div>
                    ))
                }
            </div>

            <div>
                <Cart
                    selectedCourses={selectedCourses}
                ></Cart>
            </div>

        </div>


    );
};

export default Courses;