import React from 'react';

const About =()=>{
    return(
       <>
          <section className=" bg-black h-full">
        <div className=" flex flex-row place-self-center ">
          <div className="text-white w-96 h-96 flex flex-col gap-2 mt-19">
            <div>
              <p>We are the World Best IT Compnay.</p>
              <h1 className="text-4xl font-bold">Why Choose Us?</h1>
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
          <div className="p-10  ">
            <img src="images/about.png" className="h-80"></img>
          </div>
        </div>
        </section>
       
       </>
    )
}


export default About;