import { Rating } from "@smastrom/react-rating";
import { useLoaderData} from "react-router-dom";

const SingleToyDetails = () => {
  const toy = useLoaderData();
  const { toyName, sellerName, price, pictureUrl, sellerEmail, availableQuantity, rating,description } =
    toy;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-12">
      <div>
      <figure>
        <img className="w-[600px] h-[500px]" src={pictureUrl} alt="Album" />
      </figure>
      </div>
      <div className="card-body lg:w-1/2">
        <div className="flex gap-8">
          <div className="space-y-2">
            <h2 className="card-title">{toyName}</h2>
            <p className="font-semibold">Price: ${price}</p>
            <p className="font-semibold">
              Available Quantity: {availableQuantity}
            </p>
            <div className=" flex  items-center gap-1">
              <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
              />
              <span>{rating}</span>
            </div>
          </div>
          <div className="lg:ml-36 space-y-2">
            <h2 className="text-xl font-semibold">Seller Details:</h2>
            <p className="font-semibold">Name: {sellerName}</p>
            <p className="font-semibold">Email: {sellerEmail}</p>
          </div>
        </div>
        <h4 className="font-semibold  mt-12 text-xl">Details Description:</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleToyDetails;
