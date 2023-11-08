import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const FoodDetails = () => {
    const { user } = useContext(AuthContext);
    const { email } = user;
    const loadedFood = useLoaderData();
    console.log(loadedFood);
    const { _id, photo, foodName, donorName, donorPhoto, quantity, pickupLocation, expireDate, note, donorEmail } = loadedFood;

    const [dateValue, setDateValue] = useState('');

    useEffect(() => {
        setCurrentDate();
    }, []);

    const setCurrentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setDateValue(formattedDate);
    };



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
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary w-full">Request</button>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box max-w-2xl">
                                <h3 className="font-bold text-lg">Hello!</h3>

                                <div className="">
                                    <form method="dialog">
                                        {/* food section */}
                                        <div className="mb-10">
                                            {/* food name & food id */}
                                            <div className="md:flex mb-6 mt-6 gap-4">
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Food Name</span>
                                                    </label>
                                                    <label className="">
                                                        <input type="text" name="name" disabled defaultValue={foodName} className="input input-bordered rounded-lg w-full" />
                                                    </label>
                                                </div>
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Food Id</span>
                                                    </label>
                                                    <label className="">
                                                        <input type="text" name="id" className="input input-bordered rounded-lg w-full"
                                                            defaultValue={_id}
                                                            disabled />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* expire date & additional note */}
                                            <div className="md:flex mb-6 gap-4">
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Expire Date</span>
                                                    </label>
                                                    <label className="">
                                                        <input type="date" name="date" className="input input-bordered w-full"
                                                            defaultValue={expireDate}
                                                            disabled />
                                                    </label>

                                                </div>

                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Your Email</span>
                                                    </label>
                                                    <label className="">
                                                        <input type="text" name="photo" placeholder="Food Photo URL" className="input input-bordered w-full"
                                                            defaultValue={email}
                                                            disabled />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* pickup & form photo url row */}
                                            <div className="md:flex mb-6 gap-4">
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Food Photo URL</span>
                                                    </label>
                                                    <label className="">
                                                        <input type="text" name="photo" placeholder="Food Photo URL" className="input input-bordered w-full"
                                                            defaultValue={photo}
                                                            disabled />
                                                    </label>
                                                </div>
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Pickup Location</span>
                                                    </label>
                                                    <label className="">
                                                        <input type="text" name="location" className="input input-bordered w-full" defaultValue={pickupLocation}
                                                            disabled />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* Donor name & email row */}
                                            <div className="md:flex mb-6 gap-4">
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Donor Name</span>
                                                    </label>
                                                    <label className="">
                                                        <input type="text" name="photo" placeholder="Food Photo URL" className="input input-bordered w-full"
                                                            defaultValue={donorName}
                                                            disabled />
                                                    </label>
                                                </div>
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Donor Email</span>
                                                    </label>
                                                    <label className="">
                                                        <input type="text" name="location" className="input input-bordered w-full" defaultValue={donorEmail}
                                                            disabled />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* current logged user email & request date row */}
                                            <div className="md:flex mb-6 gap-4">
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Donation Amount</span>
                                                    </label>
                                                    <label className="">
                                                        <input type="text" name="donation" placeholder="donation" className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Request Date</span>
                                                    </label>
                                                    <label className="">
                                                        <input type="date" name="location" className="input input-bordered w-full" defaultValue={dateValue}
                                                            disabled />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* donation amount row */}
                                            <div className="md:flex mb-6 gap-4">
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Additional Note</span>
                                                    </label>
                                                    <label className="">
                                                        <input type="text" name="note" placeholder="note" className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <input type="submit" value="Request Food" className="btn  bg-emerald-400 btn-block" />
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;