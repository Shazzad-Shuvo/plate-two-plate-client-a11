// import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AvailableFood = () => {
    // const foods = useLoaderData();
    // console.log(foods);
    const axiosSecure = useAxiosSecure();

    const [foodName, setFoodName] = useState('');
    const [displayFoods, setDisplayFoods] = useState([]);

    useEffect(() =>{
        axiosSecure.get('/foods')
        .then(res =>{
            setDisplayFoods(res.data);
        })
    }, [axiosSecure])


    const handleNameChange = (e) => {
        setFoodName(e.target.value);
    }
    // console.log(foodName);

    const handleSearch = (e) => {
        e.preventDefault();

        axiosSecure.get(`/filterFoods?name=${foodName}`)
            .then(res => {
                console.log(res.data);
                setDisplayFoods(res.data);
            })
    }

    return (
        <div className="mx-5 my-20 bg-slate-100 p-10">
            <Helmet>
                <title>Plate-2-Plate | Available Food</title>
            </Helmet>
            <div className="text-left max-w-sm mx-auto mb-20">
                <form onSubmit={handleSearch}>
                    <input
                        className="rounded-l-lg p-3 text-black border-2 border-gray-300"
                        type="text"
                        name="name"
                        onChange={handleNameChange}
                        placeholder="Search Here ..." />
                    <input
                        type="submit"
                        value="Search"
                        className="rounded-r-lg py-3 px-5 font-semibold bg-emerald-400 hover:bg-emerald-500" />
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    displayFoods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;