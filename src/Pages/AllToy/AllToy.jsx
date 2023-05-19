import { useEffect, useState } from "react";
import ToyList from "./ToyList";
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner";

const AllToy = () => {
  const [toys, setToys] = useState([]);
  const [loading,setLoading] = useState(true);
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

  return (
    <div>
      <h1>all toys herer</h1>
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
                toys.slice(0,20).map((toy,i)=><ToyList key={toy._id} i={i} toy={toy}></ToyList>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
