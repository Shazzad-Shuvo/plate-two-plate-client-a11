import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;
    const axiosSecure = useAxiosSecure();
    // console.log(displayName, email, photoURL);


    const handleAddFood = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const date = form.date.value;
        const location = form.location.value;
        const note = form.note.value;
        const photo = form.photo.value;

        const newFood = {
            foodName: name,
            quantity,
            expireDate: date,
            pickupLocation: location,
            status: 'Available',
            note,
            photo,
            donorName: displayName,
            donorEmail: email,
            donorPhoto: photoURL
        };

        console.log(newFood);

        axiosSecure.post('/foods', newFood)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] p-6 md:p-24">
            <div className="border-b border-gray-900/10">
                <h2 className="text-4xl font-extrabold mb-8 text-center ">Add Food</h2>
                <h4 className="text-2xl font-semibold mb-3">Food Info</h4>
            </div>
            <form onSubmit={handleAddFood}>
                {/* food section */}
                <div className="mb-10">
                    {/* food name & quantity */}
                    <div className="md:flex mb-6 mt-6 gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <label className="">
                                <input type="text" name="name" placeholder="Food Name" className="input input-bordered rounded-lg w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Quantity (served persons)</span>
                            </label>
                            <label className="">
                                <input type="text" name="quantity" placeholder="quantity" className="input input-bordered rounded-lg w-full" required />
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
                                <input type="date" name="date" className="input input-bordered w-full" required />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Additional Note</span>
                            </label>
                            <label className="">
                                <input type="text" name="note" placeholder="note" className="input input-bordered w-full" />
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
                                <input type="text" name="photo" placeholder="Food Photo URL" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Pickup Location</span>
                            </label>
                            <label className="">
                                <input type="text" name="location" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                </div>

                <input type="submit" value="Add Food" className="btn  bg-emerald-400 btn-block" />
            </form>
        </div>
    );
};

export default AddFood;