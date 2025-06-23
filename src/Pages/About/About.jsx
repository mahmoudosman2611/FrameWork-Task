import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <>
      <div className="bg-[#1ABC9C] flex items-center h-screen justify-center flex-col text-center ">
        <div className="homeText text-white space-y-5">
          <h2 className="text-4xl capitalize font-bold">ABOUT COMPONENT</h2>
          <div className="before:w-20 before:h-1 before:absolute relative before:bg-white before:left-19 before:bottom-3 after:w-20 after:h-1 after:absolute  after:bg-white after:left-52 after:bottom-3 ">
            <FontAwesomeIcon icon={solid.faStar} className=" text-xl " />
          </div>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-8 text-white text-base leading-relaxed px-4 py-5">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
