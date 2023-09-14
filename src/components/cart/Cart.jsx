/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ selectedCourses, remaining, totalCredit, totalCost }) => {

    return (
        <div className="bg-white p-4 rounded-xl w-72">
            <p className="text-blue-400 font-bold my-4">Credit Hour Remaining: {remaining}</p>
            <hr />
            <p className="text-xl font-bold my-4">Course Name</p>
            {
                selectedCourses.map((course) => (
                    <li key={course.id} className="list-decimal">{course.title}</li>
                ))
            }
            <hr />
            <p className="my-4">Total Credit Hour : {totalCredit} hr</p>
            <hr />
            <p className="my-4">Total Price : ${totalCost}</p>
        </div>
    );
};

export default Cart;