import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
    const loadedFood = useLoaderData();
    console.log(loadedFood);
    const { photo, foodName, donorName, donorPhoto, quantity, pickupLocation, expireDate, note } = loadedFood;
    return (
        <div className="my-20">
            <div className="card bg-base-100 shadow-lg">
                <figure><img src={photo} alt="" /></figure>
                <div className="card-body bg-yellow-100/60">
                    <h2 className="card-title">{foodName}</h2>
                    <div className="flex items-center mt-2 border-b-2 font-medium">
                        <img className='w-14 h-14 object-cover rounded-full'
                            alt='User avatar'
                            src={donorPhoto} />

                        <div className="pl-3 ">
                            <h3 className="font-medium">{donorName}</h3>
                            <p className="text-gray-600 text-sm">Donor</p>
                        </div>
                    </div>
                    <p><span className="font-medium">Quantity:</span> For {quantity} people</p>
                    <p><span className="font-medium">Pickup Location:</span> {pickupLocation}</p>
                    <p><span className="font-medium">Expire:</span> {expireDate}</p>
                    <p><span className="font-medium">Note:</span> {note}</p>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary w-full">Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;