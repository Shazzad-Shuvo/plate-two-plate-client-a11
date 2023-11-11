import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import RequestRow from "./RequestRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FoodRequest = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [requests, setRequests] = useState([]);
    console.log(requests);


    const url = `/foodRequests?email=${user?.email}`

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setRequests(res.data))
    }, [axiosSecure, url])


    const handleDeleteRequest = (_id) => {
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
                axiosSecure.delete(`/foodRequests/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Request has been deleted.',
                                'success'
                            )

                            // remove the user from UI
                            const remainingRequests = requests.filter(req => req._id !== _id);
                            setRequests(remainingRequests);
                        }
                    })
            }
        })

    }


    return (
        <div className="my-20">
            <Helmet>
                <title>Plate-2-Plate | Food Requests</title>
            </Helmet>
            <h2 className="text-5xl text-center my-5">My Requests</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-yellow-100">
                        <tr>
                            <th>Food</th>
                            <th>Donor</th>
                            <th>Pickup</th>
                            <th>Exp. Date</th>
                            <th>Req. Date</th>
                            <th>Donation</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requests.map(request => <RequestRow
                                key={request._id}
                                request={request}
                                handleDeleteRequest={handleDeleteRequest}
                            ></RequestRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default FoodRequest;