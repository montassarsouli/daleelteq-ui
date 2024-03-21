import React from "react";
import img31 from "../image/img31.jpg";

const Tayseer = () => {
  return (
    <section className="py-12 lg:h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:items-center">
        <img
          src={img31}
          className="hidden lg:block lg:h-full object-cover rounded-lg"
          alt="tayseer-img"
        />
        <div>
          <p className="text-gray-800 text-3xl font-semibold sm:text-xl">
            Build your documents management solution with help from our experts
          </p>
          <p className="mt-3 text-gray-600">
            Daleelteq provides a comprehensive framework for correspondences and
            documents management labeled “Taysir”. Scalable and cloud-enabled
            Taysir can meet organizations needs to manage all processes and
            documents during their complete lifecycle from capture to archive,
            then destruction.
          </p>
          <a
            href="javascript:void(0)"
            className="inline-flex gap-x-1 items-center text-green-700 hover:text-green-600 duration-150 font-medium"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Tayseer;
