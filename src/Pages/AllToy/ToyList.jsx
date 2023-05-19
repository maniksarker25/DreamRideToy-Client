import { Link } from "react-router-dom";


const ToyList = ({toy,i}) => {
    const {_id,toyName,sellerName,price,sub_category,availableQuantity,pictureUrl} = toy;
    return (
             <tr>
              <th>{i + 1}</th>
              <th><img className="w-12 h-12 rounded-lg" src={pictureUrl} alt="" /></th>
              <td>{toyName}</td>
              <td>{sellerName} </td>
              <td>{sub_category}</td>
              <td>${price}</td>
              <td>{availableQuantity}</td>
              <td><Link to={`${_id}`} className="btn btn-outline btn-info" >View Details</Link></td>
            </tr>
    );
};

export default ToyList;