import { Link } from "react-router-dom";

const FoodRow = ({ food, handleDeleteFood }) => {
    const { _id, photo, foodName, expireDate } = food;
    return (
        <tr>
            <th>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
                {/* {photo} */}
            </th>
            <td>
                {foodName}
            </td>
            <td>{expireDate}</td>
            <td>
                <Link to={`/updateFood/${_id}`}>
                    <button className="btn btn-sm" >Update</button>
                </Link>
            </td>
            <td>
                <button className="btn btn-sm"
                    onClick={() => handleDeleteFood(_id)}
                >Delete</button>
            </td>
            <td>
                <Link to={`/manage/${_id}`}>
                    <button className="btn btn-sm" >Manage</button>
                </Link>
            </td>

        </tr>
    );
};

export default FoodRow;

// onClick={() => handleDeleteRequest(_id)}