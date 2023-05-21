import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SingleToy = ({ singleToy }) => {
  const { user } = useContext(authContext);
  const handleAlart = () => {
    if (!user) {
      Swal.fire(
        "You Have To Log In First",
        "Without a login, you can not visit the single toy details page.",
        "error"
      );
    }
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="h-64 w-full" src={singleToy?.pictureUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{singleToy?.toyName}</h2>
        <p>Price: ${singleToy?.price}</p>
        <div className="">
          <div className="flex justify-between">
            <div className=" flex  items-center gap-1">
              <Rating
                style={{ maxWidth: 100 }}
                value={singleToy?.rating}
                readOnly
              />
              <span>{singleToy.rating}</span>
            </div>
            <div className="flex items-center">
              <Link to={`/allToys/${singleToy?._id}`}>
                <button onClick={handleAlart} className="primary-btn">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
