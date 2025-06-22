import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import Card from "../../Components/Card/Card";
import img1 from "../../assets/imgs/poert1.png"
import img2 from "../../assets/imgs/port2.png"
import img3 from "../../assets/imgs/port3.png"

export default function Portoflio() {
  return (
    <>
      <div className="prtofloio py-10 justify-center flex-col text-center  ">
        <div className=" flex items-center justify-center flex-col text-center ">
          <div className="homeText text-[#2C3E50] space-y-5">
            <h2 className="lg:text-4xl text-2xl capitalize font-bold">
              PORTOFLIO COMPONENT
            </h2>
            <div className="before:w-20 before:h-1 before:absolute relative before:bg-[#2C3E50] before:left-12 lg:before:left-30 before:bottom-3 after:w-20 after:h-1 after:absolute  after:bg-[#2C3E50] lg:after:left-60 after:left-40 after:bottom-3 ">
              <FontAwesomeIcon icon={solid.faStar} className=" text-xl " />
            </div>
          </div>
        </div>

        <div className="container grid lg:grid-cols-3 gap-6">

          <Card img={img1}/>
          <Card img={img2}/>
          <Card img={img3}/>
          
          <Card img={img1}/>
          <Card img={img2}/>
          <Card img={img3}/>

        </div>
      </div>
    </>
  );
}
