import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

export default function Card({ img }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div
        onClick={openModal}
        className="card p-4 rounded-2xl group cursor-pointer"
      >
        <div className="cardImage rounded-2xl overflow-hidden relative">
          <img src={img} alt="" className="w-full" />
          <div className="plus bg-[#1EBC9C] opacity-0 absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center group-hover:opacity-100 transition-all duration-300">
            <FontAwesomeIcon
              className="text-white text-8xl"
              icon={solid.faPlus}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-5xl z-50  cursor-pointer"
            >
              &times;
            </button>

            <img
              src={img}
              alt="modal"
              className="max-w-full max-h-[70vh] rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
