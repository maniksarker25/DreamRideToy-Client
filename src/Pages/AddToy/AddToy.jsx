import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  const { user,loading } = useContext(authContext);
  useTitle('Add Toy')
  if(loading){
    return <LoadingSpiner/>
  }

  const handleAddToy =(event)=>{
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const pictureUrl = form.pictureUrl.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.email.value;
    const sub_category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.quantity.value;
    const description = form.description.value;
    const toy = {toyName,pictureUrl,sellerName,sellerEmail,sub_category,price,rating,availableQuantity,description};
    console.log(toy)
    fetch('https://dream-ride-toy-server.vercel.app/addToy',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(toy)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Toy Added Successfully',
              icon: 'success',
              confirmButtonText: 'Okey'
            })
            form.reset();
          }
    })
  }
  return (
    <div className="p-6">
      <div className="lg:w-2/3 mx-auto bg-base-200 p-12 mt-12 shadow-xl">
        <h3 className="text-3xl mb-4  font-bold text-center">Add A Toy</h3>
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Toy Name</span>
              </label>
              <input
                type="text"
                name="toyName"
                placeholder="Name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Picture Url</span>
              </label>
              <input
                type="url"
                name="pictureUrl"
                placeholder="Picture Url"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                placeholder="Seller Name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold"> Seller Email</span>
              </label>
              <input
                type="email"
                placeholder="Seller Email"
                value={user?.email}
                name="email"
                required
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Sub Category</span>
              </label>
              <select required name="category" className="select w-full max-w-xs">
                <option disabled >
                  Pick A Sub Category
                </option>
                <option value='Sports Car'>Sports Car</option>
                <option value='Truck'>Truck</option>
                <option value='Mini Police Car'>Mini Police Car</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                required
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Rating</span>
              </label>
              <input
                type="number"
                placeholder="rating"
                name="rating"
                max={5}
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Available quantity</span>
              </label>
              <input
                type="number"
                placeholder="Available quantity"
                name="quantity"
                required
                className="input input-bordered"
              />
            </div>
            <textarea
              className=" w-full lg:w-[725px] h-[150px] p-8"
              name="description"
              placeholder="Detail description"
              required
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <input
            className="primary-btn mt-10 px-4 w-full py-2 rounded-md mr-5 text-white font-semibold"
            type="submit"
            value="Add Toy"
          />
        </form>
      </div>
    </div>
  );
};

export default AddToy;
