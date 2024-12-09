import Image from "next/image";
import React from "react";
import contact from "/public/contact.jpg";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-[200px] gap-4 px-4">
      <div className="w-full lg:w-[703px] h-[300px] relative">
        <Image
          src={contact}
          alt="contact"
          fill
          style={{ objectFit: "cover" }}
          className="transform scale-x-[-1] rounded-lg"
        />
      </div>
      <div className="w-full md:w-[818px] h-auto md:h-[300px] bg-[#fff3f9] rounded-lg p-[33px]">
        <div className="text-[35px] lg:text-[43px]">
          S’inscrire & économiser <span className="text-[#5cd2dd]">10%</span>
        </div>
        <div className="text-[#bda2b0] text-sm lg:text-base">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway
          job due harvest most opportunity didn't. Yet busy any meeting shark
          light marginalised 4-blocker message. Productize corporate nail caught
          synergy highlights lunch. Company another pushback items dear or any.
        </div>
        <div className="mt-4 flex flex-col lg:flex-row gap-2">
          <input
            placeholder="john@doe.com"
            className="w-full lg:w-[565px] h-[58px] p-4 rounded-md text-[#f5e1eb]"
          />
          <button className="bg-[#5cd2dd] h-[60px] w-full lg:w-[167px] flex gap-[8px] text-[18px] rounded-md justify-center items-center text-white mt-2 lg:mt-0">
            S’inscrire
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.58331 8.00004H14.4166M14.4166 8.00004L7.99998 1.58337M14.4166 8.00004L7.99998 14.4167"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
