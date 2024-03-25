import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-300 py-6">
      <div className="text-center">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
        </div>
        <div className="flex-1 mt-6 justify-center">
          <p className=" text-gray-400">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
          <p className="text-gray-400">
            <a href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="hover:text-gray-400">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
