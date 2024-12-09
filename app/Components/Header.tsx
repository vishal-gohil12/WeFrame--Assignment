import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAngleDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import logo from "/public/image.png";

export default function Header() {
  return (
    <header className="p-4">
      <div className="flex flex-wrap items-center justify-between gap-4 md:gap-0">
        <div className="flex-shrink-0">
          <Image src={logo} alt="Brand Logo" height={65} width={133.01} />
        </div>
        <div className="flex items-center w-full md:w-[768px] h-[50px] rounded-lg bg-gray-50 relative">
          <input
            placeholder="Rechercher un produit"
            className="bg-[#F9FAFB] w-full flex-grow focus:outline-none focus:ring-0 pl-4 pr-12"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-4 opacity-30 w-5 h-5"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex  items-center gap-4">
            <div className="flex gap-2 items-center h-[48px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 12.375V14.25C11.25 14.9489 11.25 15.2984 11.1358 15.574C10.9836 15.9416 10.6916 16.2336 10.324 16.3858C10.0484 16.5 9.69891 16.5 9 16.5C8.30109 16.5 7.95163 16.5 7.67597 16.3858C7.30843 16.2336 7.01642 15.9416 6.86418 15.574C6.75 15.2984 6.75 14.9489 6.75 14.25V12.375M11.25 12.375C13.2366 11.507 14.625 9.43161 14.625 7.125C14.625 4.0184 12.1066 1.5 9 1.5C5.8934 1.5 3.375 4.0184 3.375 7.125C3.375 9.43161 4.76336 11.507 6.75 12.375M11.25 12.375H6.75"
                  stroke="#282F35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-sm">Inspirations</p>
            </div>
            <div className="flex gap-2 items-center h-[48px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.99428 4.27985C8.32816 2.332 5.54978 1.80804 3.46224 3.59168C1.37469 5.37532 1.0808 8.35748 2.72015 10.467C4.08317 12.2209 8.20813 15.9201 9.56007 17.1174C9.71133 17.2513 9.78695 17.3183 9.87517 17.3446C9.95216 17.3676 10.0364 17.3676 10.1134 17.3446C10.2016 17.3183 10.2772 17.2513 10.4285 17.1174C11.7804 15.9201 15.9054 12.2209 17.2684 10.467C18.9078 8.35748 18.6498 5.35656 16.5263 3.59168C14.4029 1.8268 11.6604 2.332 9.99428 4.27985Z"
                  stroke="#8F9BA0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-sm">Mes favoris</p>
              <p className="text-[12px] text-center bg-gray-200 rounded-[30px] w-[28px] h-[18px]">
                24
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center bg-[#0093d0] text-white px-4 py-2 rounded-[6px]">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-white w-4 h-4"
            />
            <button className="h-full text-white">Panier</button>
          </div>
          <div className="rounded-full bg-[#EAEDEE] w-[44px] h-[44px] hidden md:block"></div>
          <div className="flex items-center h-[48px]">
            <p className="text-sm">FR</p>
            <FontAwesomeIcon icon={faAngleDown} className="w-5 h-5 ml-2" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <ul className="flex flex-wrap items-center gap-4 text-sm md:gap-[38px] list-none w-full justify-start pl-[10px] md:pl-[23px] overflow-x-auto  cursor-pointer">
          {[
            "Art de la table",
            "Mobilier",
            "Nappage",
            "Mobilier",
            "Matériel de salle",
            "Cuisine",
            "Barbecue",
            "Tente",
            "Chauffage",
            "Podium - Piste de danse",
            "Son et lumière",
            "Packs",
            "Consommables",
          ].map((item, index) => (
            <li
              key={index}
              className="text-gray-500 whitespace-nowrap hover:text-[#0093D0]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
