import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleToy from "./SingleToy";
import LoadingSpiner from "../../LoadingSpiner/LoadingSpiner";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [loading,setLoading] = useState(true);
  // load all Toys
  useEffect(() => {
    setLoading(true)
    fetch("https://dream-ride-toy-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false)
      });
  }, []);
  // set loader when data is in loading state
  if(loading){
    return <LoadingSpiner/>
  }
  return (
    <div className="mt-20">
      <h3 className="text-center text-4xl font-semibold">Shop By Category</h3>
      <p className="text-center my-4 w-full ">
        Welcome to our Shop By Category section, where you can easily browse and
        discover an exciting selection of toy <br /> cars tailored to various
        themes and styles. We have curated distinct categories to cater to
        different interests <br /> and preferences, ensuring there something for
        every young car enthusiast..
      </p>
      <div className="mt-8">
        <Tabs>
          <TabList>
            <Tab>Sports Car</Tab>
            <Tab>Truck</Tab>
            <Tab>Mini Police Car</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-4">
              {toys
                .filter((toy) => toy.sub_category === "Sports Car")
                .map((singleToy) => (
                  <SingleToy
                    key={singleToy._id}
                    singleToy={singleToy}
                  ></SingleToy>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-4">
              {toys
                .filter((toy) => toy.sub_category === "Truck")
                .map((singleToy) => (
                  <SingleToy
                    key={singleToy._id}
                    singleToy={singleToy}
                  ></SingleToy>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-4 ">
              {toys
                .filter((toy) => toy.sub_category === "Mini Police Car")
                .map((singleToy) => (
                  <SingleToy
                    key={singleToy._id}
                    singleToy={singleToy}
                  ></SingleToy>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
