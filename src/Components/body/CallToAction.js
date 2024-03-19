import React from "react";
import img11 from "../image/img11.jpg";

const CallToAction = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-12">
        <img
          src={img11}
          className="lg:block w-full rounded-lg shadow-lg object-cover h-full"
          alt="team-img"
        />
        <div>
          <p className="text-gray-800 text-3xl font-semibold sm:text-xl">
            Build your SaaS solution with help from our experts
          </p>
          <p className="mt-3 text-gray-600">
            Daleelteq specializes in management archiving and document
            management solutions, providing secure storage, efficient data
            acquisition, and streamlined workflows for organizations.
          </p>
          <p className="mt-3 text-gray-600">
            Daleelteq's solutions are designed to meet the requirements of
            various regulatory and industry standards.
          </p>

          <p className="mt-3 text-gray-600">
            With over 20 years of experience, Daleelteq has a deep understanding
            of the challenges that organizations face and can provide tailored
            solutions to meet their specific business objectives.
          </p>

          <p className="mt-3 text-gray-600">
            Daleelteq is committed to providing excellent customer service and
            offers affordable and scalable pricing options to meet the needs of
            organizations of all sizes.
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
export default CallToAction;
