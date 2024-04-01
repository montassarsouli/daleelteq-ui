import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-emerald-900 text-gray-300 py-3 text-center flex items-end ">
        <div className="items-end text-xs py-0">
          <p className=" text-gray-300 ">
            &copy; {new Date().getFullYear()} Daleelteq. All rights reserved.
          </p>
          <p className="text-gray-300 text-xs">
            <a href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="hover:text-gray-400">
              Terms of Service
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center grow">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <a
              className="text-gray-300"
              href="https://www.google.com/search?q=Rue+du+Lac+Victoria%2C+immeuble+Hajer%2C+1053%2C+les+Berges+du+Lac%2C+Tunis+%E2%80%93+Tunisie&rlz=1C1VDKB_frTN1037TN1037&oq=Rue+du+Lac+Victoria%2C+immeuble+Hajer%2C+1053%2C+les+Berges+du+Lac%2C+Tunis+%E2%80%93+Tunisie&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDEyMTdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#rlimm=8732719946157134835"
            >
              Les Berges du Lac, Tunis – Tunisie
            </a>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <p className="text-gray-300">(+216) 71 960 504</p>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <p className="text-gray-300">t.management@daleelteq.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
/*
          <div>
            <h4 className="font-semibold text-white">Head quarter - Jeddah</h4>
            <p className="text-gray-400">
              Location: Jeddah, Saudi Arabia P.O. Box 24824, 21456
            </p>
            <p className="text-gray-400">Phone:(9662) 6424426</p>
            <p className="text-gray-400">Phone:(9662) 6433388</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Tunisia Branch</h4>
            <p className="text-gray-400">
              Location:Rue du Lac Victoria, immeuble Hajer, 1053, les Berges du
              Lac, Tunis – Tunisie
            </p>
            <p className="text-gray-400">Phone: +216 71 960 504</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Sudan Branch</h4>
            <p className="text-gray-400">
              Location:Khartoum, Sudan P.O. Box 11468, 11111
            </p>
            <p className="text-gray-400">Phone: (249) 183 747 041</p>
            <p className="text-gray-400">Phone: (249) 183 747 044</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Pakistan Branch</h4>
            <p className="text-gray-400">
              Location: Rawalpindi, Pakistan 11-D,6th Road, Satellite Town
            </p>
            <p className="text-gray-400">Phone:(92) 300 5121896</p>
            <p className="text-gray-400">Phone:(92) 51 4849044</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Mali Branch</h4>
            <p className="text-gray-400">
              Location: Bamako, Mali Hamdallaye ACI 2000
            </p>
            <p className="text-gray-400">Phone:(223) 44 90 16 65</p>
            <p className="text-gray-400">Phone:(223) 44 90 16 66</p>
          </div>
*/
export default Footer;
