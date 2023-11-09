import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";

const UpdateFood = () => {
    const axiosSecure = useAxiosSecure();
    const loadedFood = useLoaderData();
    const { _id, photo, foodName, quantity, pickupLocation, expireDate, note } = loadedFood;


    const handleUpdateFood = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const date = form.date.value;
        const location = form.location.value;
        const note = form.note.value;
        const photo = form.photo.value;

        const updateFood = {
            foodName: name,
            quantity,
            expireDate: date,
            pickupLocation: location,
            note,
            photo
        };

        console.log(updateFood);
        axiosSecure.put(`/foods/${_id}`, updateFood)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-6 md:p-24">
            <div className="border-b border-gray-900/10">
                <h2 className="text-4xl font-extrabold mb-8 text-center ">Update Food</h2>
                <h4 className="text-2xl font-semibold mb-3">Food Info</h4>
            </div>
            <form onSubmit={handleUpdateFood}>
                {/* food section */}
                <div className="mb-10">
                    {/* food name & quantity */}
                    <div className="md:flex mb-6 mt-6 gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <label className="">
                                <input type="text" name="name" defaultValue={foodName} placeholder="Food Name" className="input input-bordered rounded-lg w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Quantity (served persons)</span>
                            </label>
                            <label className="">
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="quantity" className="input input-bordered rounded-lg w-full" />
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
                                <input type="date" name="date" defaultValue={expireDate} className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Additional Note</span>
                            </label>
                            <label className="">
                                <input type="text" name="note" defaultValue={note} placeholder="note" className="input input-bordered w-full" />
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
                                <input type="text" name="photo" defaultValue={photo} placeholder="Food Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Pickup Location</span>
                            </label>
                            <label className="">
                                <input type="text" name="location" defaultValue={pickupLocation} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>

                <input type="submit" value="Update Food" className="btn  bg-emerald-400 btn-block" />
            </form>
        </div>
    );
};

export default UpdateFood;