
const RequestRow = ({ request, handleDeleteRequest }) => {
    const { _id, donorName, pickupLocation, expireDate, requestDate, donation, status } = request;
    return (
        <tr>
            <th>
                {donorName}
            </th>
            <td>
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
                {
                    status === 'Available'
                        ? <button className="btn btn-sm" onClick={() => handleDeleteRequest(_id)}>Cancel</button>
                        : ''
                }
            </th>
        </tr>
    );
};

export default RequestRow;