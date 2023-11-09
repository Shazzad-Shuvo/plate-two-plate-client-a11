
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
            <td><button className="btn btn-sm" >Update</button></td>
            <td>
                <button className="btn btn-sm"
                    onClick={() => handleDeleteFood(_id)}
                >Delete</button>
            </td>
            <td><button className="btn btn-sm" >Manage</button>
            </td>
            <th>

            </th>
        </tr>
    );
};

export default FoodRow;

// onClick={() => handleDeleteRequest(_id)}