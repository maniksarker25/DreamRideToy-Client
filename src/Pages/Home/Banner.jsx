import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item h-72 lg:h-[600px]  relative w-full">
          <img 
            src={banner1}
            className="w-full rounded-md"
          />
          <div className="absolute rounded-md flex items-center lg:ps-12 ps-2 h-full   left-0 top-0 right- bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="lg:ps-8 ps-2 w-full lg:w-1/2">
            <h2 className="lg:text-7xl text-3xl font-bold text-white">
              Find Your Dream Car Toys Form Here
            </h2>
            <p className="text-white my-2 lg:my-4">
            Experience the thrill of imagination and adventure with Dream Ride Toys! Discover a world of endless possibilities as you explore our vast collection of premium car toys.
            </p>
            <div>
              <button className="primary-btn mr-4">
                Discover More
              </button>
              <button className="outline outline-slate-100 border-1 text-white px-4 py-1 ">
                Latest Cars
              </button>
            </div>
          </div>
        </div>
        </div>
        <div id="item2" className="carousel-item h-72 lg:h-[600px] relative w-full">
          <img
            src={banner2}
            className="w-full rounded-md"
          />
          <div className="absolute rounded-md flex items-center lg:ps-12 ps-2 h-full   left-0 top-0 right- bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="lg:ps-8 ps-2 w-full lg:w-1/2">
            <h2 className="lg:text-7xl text-3xl font-bold text-white">
            Find Your Dream Car Toys Form Here
            </h2>
            <p className="text-white my-4">
            Experience the thrill of imagination and adventure with Dream Ride Toys! Discover a world of endless possibilities as you explore our vast collection of premium car toys.
            </p>
            <div>
              <button className="primary-btn mr-4">
                Discover More
              </button>
              <button className="outline outline-slate-100 border-1 text-white px-4 py-1 ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        </div>
        <div id="item3" className="carousel-item h-72 lg:h-[600px] relative w-full">
          <img
            src={banner3}
            className="w-full rounded-md"
          />
          <div className="absolute rounded-md flex items-center lg:ps-12 ps-2 h-full   left-0 top-0 right- bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="lg:ps-8 ps-2 w-full lg:w-1/2">
            <h2 className="lg:text-7xl text-3xl font-bold text-white">
            Find Your Dream Car Toys Form Here
            </h2>
            <p className="text-white my-4">
            Experience the thrill of imagination and adventure with Dream Ride Toys! Discover a world of endless possibilities as you explore our vast collection of premium car toys.
            </p>
            <div>
              <button className="primary-btn mr-4">
                Discover More
              </button>
              <button className="outline outline-slate-100 border-1 text-white px-4 py-1 ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="bg-primary px-2 text-white rounded-lg">
          1
        </a>
        <a href="#item2" className="bg-primary px-2 text-white rounded-lg">
          2
        </a>
        <a href="#item3" className="bg-primary px-2 text-white rounded-lg">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
