import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner";
import MyToyRow from "./MyToyRow";


const MyToy = () => {

    const {user} = useContext(authContext);
    const [myToys,setMyToys] = useState([]);
    const [loading,setLoading] = useState(true)
    const url = `http://localhost:5000/myToys?email=${user?.email}`
    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setMyToys(data)
            setLoading(false)
        })
    },[url])
   if(loading){
    return <LoadingSpiner/>
   }
    return (
        <div>
            <h1>This is my toy page:{myToys.length}</h1>
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
            {
                myToys.map((myToy,i)=><MyToyRow key={myToy._id} i={i} myToy={myToy}></MyToyRow>)
            }
           
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyToy;