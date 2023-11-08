import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";

const AvailableFood = () => {
    const foods = useLoaderData();
    console.log(foods);
    return (
        <div className="mx-5 my-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;