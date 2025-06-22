import React from "react";

import avatar from "../../assets/imgs/avataaars .svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="bg-[#1ABC9C] flex items-center h-screen justify-center flex-col text-center space-y-10">
        <div className="homeImg text-white">
          <img className="w-60 hover:rotate-y-180 transition-all duration-600 " src={avatar} />
        </div>
        <div className="homeText text-white space-y-5">
          <h2 className="text-4xl capitalize font-bold">START FRAMEWORK</h2>
            <div className="before:w-20 before:h-1 before:absolute relative before:bg-white before:left-18 before:bottom-3 after:w-20 after:h-1 after:absolute  after:bg-white after:left-49 after:bottom-3 ">
              <FontAwesomeIcon icon={solid.faStar} className=" text-xl " />
            </div>

          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
