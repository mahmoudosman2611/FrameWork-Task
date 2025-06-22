import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brands from "@fortawesome/free-brands-svg-icons";
import * as solid from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="text-white ">
        <div className="bg-[#2C3E50] py-20">
          <div className="container footerUpper grid w-52 lg:w-full lg:grid-cols-3 gap-8 lg:gap-4 text-center">
            <div className="space-y-3 ">
              <h3 className="font-bold lg:text-2xl">LOCATION</h3>
              <p className="text-sm lg:text-base">2215 John Daniel Drive</p>
              <p className="text-sm lg:text-base">Clark, MO 65243</p>
            </div>
            <div className="flex items-center content-center flex-col">
              <h3 className="font-bold lg:text-2xl">AROUND THE WEB</h3>
              <div className="footerLower-icons text-white flex gap-4 py-4">
                <span className="size-8 border-1 p-4 border-white-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <FontAwesomeIcon icon={brands.faFacebook} className=" " />
                </span>
                <span className="size-8 border-1 p-4 border-white-600  rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer ">
                  <FontAwesomeIcon icon={brands.faTwitter} className="" />
                </span>
                <span className="size-8 border-1 p-4 border-white-600  rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer ">
                  <FontAwesomeIcon icon={brands.faLinkedin} className="" />
                </span>
                <span className="size-8 border-1 p-4 border-white-600  rounded-full flex items-center justify-center  hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <FontAwesomeIcon icon={solid.faGlobe} className="" />
                </span>
              </div>
            </div>
            <div className="">
              <h3 className="font-bold lg:text-2xl">ABOUT FREELANCER</h3>
              <p className="text-xs lg:text-base mt-2">
                Freelance is a free to use, licensed Tailwind theme created by
                Mahmoud osman
              </p>
            </div>
          </div>
        </div>
        <div className=" footerLower text-center bg-[#1A252F] py-5">
          <p className="text-sm lg:text-base">
            Copyright © <strong>MAHMOUD OSMAN</strong> 2025
          </p>
        </div>
        
        
      </footer>
    </>
  );
}
