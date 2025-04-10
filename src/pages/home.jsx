import React from "react";

const Home = () => {
  return (
    <>
      <section className=" bg-black lg:h-full max-sm:h-full max-sm:w-full lg:w-full">
        <div className=" flex flex-row place-self-center ">
          <div className="text-white w-96 h-96 flex flex-col gap-2 mt-19">
            <div>
              <p>We are the World Best IT Compnay.</p>
              <h1 className="text-4xl font-bold">Welcome to Web Development</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quasi consequuntur nostrum, corrupti aliquam doloribus corporis
                exercitationem iure hic repellat! Iusto sint ex minima,
                asperiores ea rerum.
              </p>
            </div>
            <div className="flex flex-row gap-4 ">
              <button className="bg-[#3a0ca3] rounded-sm w-30 h-10 text-center cursor-pointer">
                Connect Now
              </button>
              <button className="bg-transparent border-1 border-[#3a0ca3] rounded-sm w-28 h-10 text-center cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
          <div className="p-10  ">
            <img src="images/home1.png" className="h-80"></img>
          </div>
        </div>
        <div className="bg-white max-sm:h-20 lg:h-30 lg:w-4xl max-sm:w-lg rounded-lg flex justify-center items-center place-self-center gap-10">
          <div className=" lg:h-15 max-sm:h-8 flex flex-col lg:justify-center lg:items-center max-sm:justify-center max-sm:items-center lg:px-8 max-sm:px-8 border-r-black border-r-2 ">
            <p className="lg:text-2xl max-sm:text-xs font-bold">50+</p>
            <p className="font-serif lg:text-sm max-sm:text-xs">Registered Companies</p>
          </div>
          <div className=" lg:h-15 max-sm:h-8 flex flex-col lg:justify-center lg:items-center max-sm:justify-center max-sm:items-center lg:px-8 max-sm:px-8 border-r-black border-r-2 ">
            <p className="lg:text-2xl max-sm:text-xs  font-bold">100,00+</p>
            <p className="font-serif lg:text-sm max-sm:text-xs">Happy Clients</p>
          </div>
          <div className=" lg:h-15 max-sm:h-8 flex flex-col lg:justify-center lg:items-center max-sm:justify-center max-sm:items-center lg:px-8 max-sm:px-8 border-r-black border-r-2 ">
            <p className="lg:text-2xl max-sm:text-xs  font-bold">500+</p>
            <p className="font-serif lg:text-sm max-sm:text-xs">Well Known Developers</p>
          </div>
          <div className=" lg:h-15 max-sm:h-8 flex flex-col lg:justify-center lg:items-center max-sm:justify-center max-sm:items-center lg:px-8 max-sm:px-8">
            <p className="lg:text-2xl max-sm:text-xs  font-bold">24/7</p>
            <p className="font-serif lg:text-sm max-sm:text-xs">Service</p>
          </div>
        </div>

        
        <div className=" flex flex-row place-self-center mt-15 ">
          <div className="p-10  ">
            <img src="images/home2.png" className="h-90"></img>
          </div>
          <div className="text-white w-96 h-96 flex flex-col gap-2 mt-19">
            <div>
              <p>We are here to help you.</p>
              <h1 className="text-4xl font-bold">Get Started Today</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quasi consequuntur nostrum, corrupti aliquam doloribus corporis
                exercitationem iure hic repellat! Iusto sint ex minima,
                asperiores ea rerum.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <button className="bg-[#3a0ca3] rounded-sm w-30 h-10 text-center cursor-pointer">
                Connect Now
              </button>
              <button className="bg-transparent border-1 border-[#3a0ca3] rounded-sm w-28 h-10 text-center cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
