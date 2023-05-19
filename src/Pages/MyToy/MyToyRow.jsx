import { FaTrash,FaEdit } from 'react-icons/fa';
const MyToyRow = ({myToy,i}) => {

    const {pictureUrl,toyName,price,availableQuantity,sub_category} = myToy;
  return (
    <tr>
    <th>{i + 1}</th>
    <th><img className="w-12 h-12 rounded-lg" src={pictureUrl} alt="" /></th>
    <td>{toyName}</td>
    <td>{sub_category}</td>
    <td>${price}</td>
    <td>{availableQuantity}</td>
    <td>
        <div className='flex gap-6'>
            <FaEdit className='text-blue-400 cursor-pointer'/>
            <FaTrash className='text-red-600 cursor-pointer'/>
        </div>
    </td>
  </tr>
  );
};

export default MyToyRow;
