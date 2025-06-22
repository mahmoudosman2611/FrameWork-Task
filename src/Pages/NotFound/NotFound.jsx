import img404 from "../../assets/imgs/Not found.png";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col gap-3">
        <img className="w-80" src={img404} alt="" />
        <p className="font-semibold text-violet-700">
          Page you are looking for is Not Found
        </p>
        <Link
          className="btn hover:bg-violet-900 bg-violet-700 text-white transition-colors duration-300"
          to="/Home"
        >
          Back To Home Page
        </Link>
      </div>
    </>
  );
}
