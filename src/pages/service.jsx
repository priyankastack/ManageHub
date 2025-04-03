import React, { Fragment, useContext, useEffect, useState } from "react";
import { TokenContext } from "../context/context";

const Service = () => {
  const { loginuser } = useContext(TokenContext);
  const [service, setService] = useState("");

  useEffect(() => {
    const getService = async () => {
      const response = await fetch("https://manage-hub-backend.vercel.app/api/services", {
        method:"GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setService(data.data);
        console.log(service);
      }
    };
    getService();
  }, []);

  useEffect(() => {
    console.log(service);
  }, [service]);

  return (
    <>
      <section className=" bg-black h-full">
        <div className="bg-red  gap-4 place-self-center text-white ">
          <div className=" grid grid-cols-3 gap-5 border-0">
          
           {service&&service.map((ele,idx)=>{
              return(
              <>
              <div
                key={idx}
                className="flex flex-col gap-2  p-4 justify-items-start border-1 border-amber-50 w-90"
              >
                <img src="/images/card.png" alt="card-img"  />
                <div className=" w-80 flex justify-between">
                  <span>{ele.provider}</span>
                  <span>{ele.price}</span>
                </div>
                <p className="text-2xl font-bold">{ele.service}</p>
                <p>{ele.description}.</p>
              </div>
              
              
              </>)
           })}
               
             
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
