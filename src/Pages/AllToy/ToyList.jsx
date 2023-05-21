import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../Provider/AuthProvider";


const ToyList = ({toy,i}) => {
    const {_id,toyName,sellerName,price,sub_category,availableQuantity} = toy;
    const {user} = useContext(authContext);

    const handleAlart = () => {
      if (!user) {
        Swal.fire(
          'You Have To Log In First',
          'Without a login, you can not visit the single toy details page.',
          'error'
        )
      }
    };
    return (
             <tr>
              <th>{i + 1}</th>
              <td>{toyName}</td>
              <td>{sellerName} </td>
              <td>{sub_category}</td>
              <td>${price}</td>
              <td>{availableQuantity}</td>
              <td><Link to={`${_id}`} ><button onClick={handleAlart}  className="btn btn-outline btn-info">View Details</button></Link></td>
            </tr>
    );
};

export default ToyList;