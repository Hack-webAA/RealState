import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact text-2xl text-lest m-4 sm:mx-20 w-[50%] ">
        <p className="flex">
          <img className="w-10 h-10 px-1 mx-2 py-1" src={"/location.png"} />
          Address: Sitapaila, Kathmandu, Nepal
        </p>
        <p className="flex mt-2">
          <img className="w-10 h-10 px-1 mx-2 py-1" src={"/call.png"} />
          Call Us: +977-981010101
        </p>
        <p className="flex mt-2">
          <img className="w-10 h-10 px-1 mx-2 py-1" src={"/mail.png"} />
          Email: HamroGharbuy.com
        </p>
        <p className="flex mt-2">
          <img className="w-10 h-10 px-1 mx-2 py-1" src={"/time.png"} />Time: Sun-Sat, 09:00 am-06:00 pm
        </p>
      </div>
    </>
  );
};

export default Contact;
