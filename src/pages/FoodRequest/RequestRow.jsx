
const RequestRow = ({ request }) => {
    const { _id, donorName, pickupLocation, expireDate, requestDate, donation, status } = request;
    return (
        <tr>
            <th>
                {donorName}
            </th>
            <td>
                {/* <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div> */}

                {pickupLocation}
            </td>
            <td>{expireDate}</td>
            <td>{requestDate}</td>
            <td>${donation}</td>
            <td>
                {
                    status === 'Delivered' ? <span className=" font-semibold text-green-600">{status}</span>
                    : status
                }
            </td>
            <th>
                {/* {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                } */}
                {
                    status === 'Available'
                        ? <button className="btn btn-sm" >Cancel</button>
                        : ''
                }
            </th>
        </tr>
    );
};

export default RequestRow;