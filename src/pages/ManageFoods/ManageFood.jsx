import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageFood = () => {
    const loadedFood = useLoaderData();
    console.log(loadedFood._id);
    const axiosSecure = useAxiosSecure();
    const [requestedFood, setRequestedFood] = useState([]);
    console.log(requestedFood);
    const { _id, requesterName, requesterPhoto, requesterEmail, requestDate, status } =
        requestedFood;


    const url = `/foodRequests/${loadedFood._id}`;

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                console.log(res.data);
                setRequestedFood(res.data);
            })
    }, [])



    const handleConfirmDelivery = (_id) => {
        axiosSecure.patch(`/foodRequests/${_id}`, { status: 'Delivered' })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food delivered successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
    }

    return (
        <div className="my-20 text-center flex justify-center ">
            {
                requestedFood ?
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex items-center mt-2 border-b-2 pb-2 font-medium">
                                <img className='w-14 h-14 object-cover rounded-full'
                                    alt='User avatar'
                                    src={requesterPhoto} />
                                <div className="pl-3 ">
                                    <h3 className="card-title">{requesterName}</h3>
                                </div>
                            </div>
                            <h2 className="card-title">Email: {requesterEmail}</h2>
                            <p>Request Date: {requestDate}</p>
                            <p>Status: {status}</p>
                            <div className="card-actions justify-end mt-6">
                                <button
                                    onClick={() => handleConfirmDelivery(_id)}
                                    className="btn btn-primary w-full">Deliver</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <h2 className="text-red-600 text-6xl font-bold">Sorry! Not requested yet ... </h2>
                    </div>
            }
        </div>
    );
};

export default ManageFood;