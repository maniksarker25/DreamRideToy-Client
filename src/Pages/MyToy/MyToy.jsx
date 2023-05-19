import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";

const MyToy = () => {
  const { user } = useContext(authContext);
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [control, setControl] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [myToy,setToy] = useState({});
  const [id,setId] = useState(null);
  const url = `http://localhost:5000/myToys?email=${user?.email}`;
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setLoading(false);
      });
  }, [url, control]);
  if (loading) {
    return <LoadingSpiner />;
  }

  const openModal = (myToy,id) => {
    setToy(myToy)
    setId(id)
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleEdit = event=>{
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const availableQuantity = form.quantity.value;
    const description = form.description.value;
    const updatedToy = {price,availableQuantity,description}
    // console.log(updatedToy)
    fetch(`http://localhost:5000/toy/${id}`,{
      method:'PATCH',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(updatedToy)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount >0){
        Swal.fire({
          title: 'Success!',
          text: 'Toy updated Successfully',
          icon: 'success',
          confirmButtonText: 'Okey'
        })
        setControl(!control)
      }
    })
  }

  return (
    <div>
      {myToys.length === 0 ? (
        <h2 className="text-3xl mt-16 text-center font-semibold">
          You Have Not Added Any Toys
        </h2>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Sl</th>
                <th>Toy Picture</th>
                <th>Toy Name</th>
                <th>SubCategory</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((myToy, i) => (
                <MyToyRow
                  openModal={openModal}
                  setControl={setControl}
                  control={control}
                  key={myToy._id}
                  i={i}
                  myToy={myToy}
                ></MyToyRow>
              ))}
            </tbody>
          </table>
          {isOpen && (
            <div className="fixed inset-0  flex items-center justify-center z-10">
              <div className="absolute  px-16 bg-white w-2/5 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold">{myToy.toyName}</h3>
                <form onSubmit={handleEdit}>
                  <div>
                    <div className="flex justify-between">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Price</span>
                        </label>
                        <input
                          type="text"
                          name="price"
                          defaultValue={myToy.price}
                          placeholder="Price"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Quantity</span>
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          defaultValue={myToy.availableQuantity}
                          placeholder="Quantity"
                          className="input input-bordered"
                        />
                      </div>
                    </div>
                    <textarea
                      placeholder="Description"
                      name="description"
                      defaultValue={myToy.description}
                      className="textarea mt-4 textarea-bordered textarea-lg w-full max-w-[800px]"
                    ></textarea>
                  </div>
                  <div className="flex justify-between">
                    <input
                      className="primary-btn"
                      type="submit"
                      value="Update"
                    />
                    <button
                      onClick={closeModal}
                      className="bg-gray-500 rounded-md font-semibold hover:bg-gray-700 text-white py-2 px-4"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyToy;
