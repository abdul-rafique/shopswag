import React from "react";

function Testimonial({ imgPath }) {
  return (
    <div className="max-w-md p-10 rounded-xl bg-white text-black">
      <p className="mb-6">
        Orci porta non pulvinar neque laoreet suspendi sseport titor leo a diam
        sollicitudin tempor id eu. Utre tellus elementum sagittis vitae et leo
        duis utr evnireva silacus sed viverra tellus in domo revis
      </p>
      <div className="flex items-center gap-3">
        <img
          src={process.env.PUBLIC_URL + imgPath}
          alt="testimonial_1"
          className="w-16 rounded-full"
        />
        <div className="">
          <span className="block font-bold">Lorem ipsum</span>
          <span className="block text-sm">Job Title - Company</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
