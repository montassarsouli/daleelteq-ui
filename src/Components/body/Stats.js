import React from "react";
import img21 from "../image/img21.jpg";

const Stats = () => {
  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "10K+",
      title: "Downloads",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
  ];

  return (
    <section className="py-12 lg:h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:items-center">
        <img
          src={img21}
          className="hidden lg:block lg:h-full object-cover rounded-lg"
          alt="stat-img"
        />
        <div className="mt-6 gap-12 sm:mt-0 md:block lg:block lg:w-3/4">
          <p className="text-gray-800 text-3xl font-semibold sm:text-xl">
            We do our best to make customers always happy
          </p>
          <p className="mt-3 max-w-xl text-gray-600">
            Daleelteq is a company that strives to make its customers happy.
            They understand that customer satisfaction is key to the success of
            any business, and they go above and beyond to ensure that their
            customers are satisfied with their products and services.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-y-8 gap-x-14">
            {stats.map((item, idx) => (
              <li key={idx} className="text-center">
                <h4 className="text-2xl text-green-700 font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
          <a
            href="javascript:void(0)"
            className="inline-flex gap-x-1 items-center text-green-700 hover:text-green-600 duration-150 font-medium mt-6"
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

export default Stats;
