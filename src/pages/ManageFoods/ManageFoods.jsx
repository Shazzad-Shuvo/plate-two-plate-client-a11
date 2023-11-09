import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FoodRow from "./FoodRow";
import Swal from "sweetalert2";


const ManageFoods = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [myFoods, setMyFoods] = useState([]);
    console.log(myFoods);


    const url = `/donorFoods?email=${user?.email}`;

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setMyFoods(res.data))
    }, [axiosSecure, url])


    const handleDeleteFood = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/donorFoods/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Food has been deleted.',
                                'success'
                            )

                            // remove the user from UI
                            const remainingFoods = myFoods.filter(food => food._id !== _id);
                            setMyFoods(remainingFoods);
                        }
                    })
            }
        })

    }


    return (
        <div>
            <h2 className="text-5xl text-center my-5">My Added Foods</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-yellow-100">
                        <tr>
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Exp. Date</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myFoods.map(food => <FoodRow
                                key={food._id}
                                food={food}
                                handleDeleteFood={handleDeleteFood}
                            ></FoodRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageFoods;