import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import RequestRow from "./RequestRow";
import Swal from "sweetalert2";

const FoodRequest = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [requests, setRequests] = useState([]);
    console.log(requests);


    const url = `/foodRequests?email=${user?.email}`

    useEffect(() => {
        axiosSecure(url)
            .then(res => setRequests(res.data))
    }, [axiosSecure, url])


    


    return (
        <div>
            <h2 className="text-5xl text-center my-5">My Requests</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-yellow-100">
                        <tr>
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
                        {/* {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        } */}
                        {
                            requests.map(request => <RequestRow
                                key={request._id}
                                request={request}
                                
                            ></RequestRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default FoodRequest;