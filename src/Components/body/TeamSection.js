import React from "react";

const TeamSection = () => {
  const team = [
    {
      avatar: "https://via.placeholder.com/150",
      name: "Nom Prénom",
      title: "occupation",
      linkedin: "https://www.linkedin.com/in/martianadialan/",
      twitter: "https://twitter.com/martiana_dialan",
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "Nom Prénom",
      title: "occupation",
      linkedin: "https://www.linkedin.com/in/michealcolorand/",
      twitter: "https://twitter.com/micheal_colorand",
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "Nom Prénom",
      title: "occupation",
      linkedin: "https://www.linkedin.com/in/brownluis/",
      twitter: "https://twitter.com/brown_luis",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="max-w-xl w-full">
            <h3 className="text-gray-800 text-2xl font-semibold sm:text-3xl mb-6">
              Meet Our Team
            </h3>
            <p className="text-gray-600 mb-8">
              We are a team of passionate and experienced professionals who are
              dedicated to providing our clients with the highest quality of
              service.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <li key={index} className="flex flex-col items-center">
                  <div className="w-32 h-32 overflow-hidden rounded-full mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-gray-800 font-semibold text-lg mb-1">
                    {member.name}
                  </h4>
                  <p className="text-green-600 mb-2">{member.title}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 hover:text-gray-700 transition duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 4.75c-.875.383-1.818.641-2.8.76A5.063 5.063 0 0 0 22.813 3c-1.025.6-2.15 1.038-3.363 1.273a5.038 5.038 0 0 0-8.163 4.84C11.688 9.8 9.138 8.325 6.85 5.7 6.488 6.388 6.3 7.15 6.3 7.95a5.03 5.03 0 0 0 2.25 4.213 4.985 4.985 0 0 1-2.275-.625v.063a5.041 5.041 0 0 0 4.038 4.938c-.425.113-.85.163-1.275.163-.25 0-.488-.038-.713-.075.488 1.575 1.888 2.725 3.563 2.75a10.132 10.132 0 0 1-6.3 2.163c-.4 0-.788-.038-1.175-.113a14.167 14.167 0 0 0 7.663 2.25c9.025 0 13.95-7.513 13.95-13.987 0-.213 0-.425-.013-.638a9.942 9.942 0 0 0 2.45-2.55c-.875.488-1.825.8-2.825.963z"></path>
                      </svg>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 hover:text-gray-700 transition duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.937 0H2.063C.938 0 0 .938 0 2.063v19.874C0 23.062.938 24 2.063 24H21.94A2.072 2.072 0 0 0 24 21.937V2.062C24 .937 23.062 0 21.937 0zM7.75 20.375H4.313V9.688H7.75v10.687zM6.03 8.07a2.06 2.06 0 0 1-2.055-2.063A2.058 2.058 0 0 1 6.03 3.95a2.062 2.062 0 1 1 0 4.12zm14.313 12.313h-3.437v-5.376c0-1.28-.025-2.925-1.775-2.925-1.775 0-2.045 1.387-2.045 2.818V20.38H8.94V9.688h3.374v1.5c.45-.688 1.225-1.325 2.875-1.325 2.45 0 4.575 1.613 4.575 4.963v5.55h.001z"></path>
                      </svg>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
