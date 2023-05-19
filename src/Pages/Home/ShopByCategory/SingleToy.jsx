import { Rating } from "@smastrom/react-rating";

const SingleToy = ({ singleToy }) => {
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
              <Rating style={{ maxWidth: 100 }} value={singleToy?.rating} readOnly />
              <span>{singleToy.rating}</span>
            </div>
            <div className="flex items-center">
             <button className="primary-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
