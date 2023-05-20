import { useEffect, useState } from "react";
import ToyList from "./ToyList";
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner";
import useTitle from "../../hooks/useTitle";

const AllToy = () => {
  const [toys, setToys] = useState([]);
  const [loading,setLoading] = useState(true);
  useTitle('All Toy')
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data)
        setLoading(false)
      });
  }, []);
  if(loading){
    return <LoadingSpiner></LoadingSpiner>
  }
  const handleSearch = event =>{
    event.preventDefault();
    const form = event.target;
    const searchName = form.search.value;
    fetch(`http://localhost:5000/toy/${searchName}`)
    .then(res=>res.json())
    .then(data=> setToys(data))
  }

  return (
    <div>
        <form onSubmit={handleSearch} className="my-4">
        <input type="text" name="search" placeholder="Search Car By Name" className="input   input-info w-full max-w-xs rounded-e-[0]" />
        <input className="bg-primary rounded-r-lg px-8 py-3 cursor-pointer  text-white font-semibold " type="submit" value="Search" />
        </form>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>SubCategory</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                toys.map((toy,i)=><ToyList key={toy._id} i={i} toy={toy}></ToyList>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
