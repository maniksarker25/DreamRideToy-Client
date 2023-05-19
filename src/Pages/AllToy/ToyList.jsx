import { Link } from "react-router-dom";


const ToyList = ({toy,i}) => {
    const {toyName,sellerName,price,sub_category,availableQuantity} = toy;
    return (
             <tr>
              <th>{i + 1}</th>
              <td>{toyName}</td>
              <td>{sellerName} </td>
              <td>{sub_category}</td>
              <td>{price}</td>
              <td>{availableQuantity}</td>
              <td><Link className="btn btn-outline btn-info" >View Details</Link></td>
            </tr>
    );
};

export default ToyList;