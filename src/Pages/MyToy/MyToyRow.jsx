
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
const MyToyRow = ({ myToy, i, setControl, control, openModal }) => {
  const { pictureUrl, toyName, price, availableQuantity, sub_category, _id } =
    myToy;

  const handleDeleteToy = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: " primary-btn",
        cancelButton:
          "bg-red-600 px-6 py-2 text-white font-bold rounded-md mr-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/myToys/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your Toy has been deleted.",
                  "success"
                );
                setControl(!control);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your Toy is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <tr>
      <th>{i + 1}</th>
      <th>
        <img className="w-12 h-12 rounded-lg" src={pictureUrl} alt="" />
      </th>
      <td>{toyName}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td>
        <div className="flex gap-6">
          <FaEdit
            onClick={() => openModal(myToy,_id)}
            className="text-blue-400 cursor-pointer"
          />
          <FaTrash
            onClick={() => handleDeleteToy(_id)}
            className="text-red-600 cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default MyToyRow;
