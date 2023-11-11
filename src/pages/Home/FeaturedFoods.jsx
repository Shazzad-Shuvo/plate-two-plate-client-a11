import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FoodCard from "../FoodCard/FoodCard";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
    const [foods, setFoods] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('/featuredFood')
            .then(res => {
                setFoods(res.data);
            })
    }, [axiosSecure])
    return (
        // <div>
        //     <div className="card bg-base-100 shadow-lg">
        //         <figure><img src={photo} alt="" /></figure>
        //         <div className="card-body bg-cyan-100/60">
        //             <h2 className="card-title">{foodName}</h2>
        //             <div className="flex items-center mt-2 border-b-2 pb-2 font-medium">
        //                 <img className='w-14 h-14 object-cover rounded-full'
        //                     alt='User avatar'
        //                     src={donorPhoto} />

        //                 <div className="pl-3 ">
        //                     <h3 className="font-medium">{donorName}</h3>
        //                     <p className="text-gray-600 text-sm">Donor</p>
        //                 </div>
        //             </div>
        //             <p><span className="font-medium">Quantity:</span> For {quantity} people</p>
        //             <p><span className="font-medium">Pickup Location:</span> {pickupLocation}</p>
        //             <p><span className="font-medium">Expire:</span> {expireDate}</p>
        //             <p><span className="font-medium">Note:</span> {note}</p>
        //             <Link to={`/details/${_id}`}>
        //                 <div className="card-actions justify-end mt-4">
        //                     <button className="btn btn-primary">View Details</button>
        //                 </div>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
        <div className="my-20">
            <h2 className="text-center font text-5xl font-bold mb-10">Our Featured Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="flex justify-center mt-8">
                <Link to='/availableFood'>
                    <button className="btn bg-emerald-400 hover:bg-emerald-500">Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;