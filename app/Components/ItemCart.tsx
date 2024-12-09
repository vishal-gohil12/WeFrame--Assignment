import React from "react";
import table from "/public/tableItem.png";
import Image from "next/image";

export default function ItemCart() {
  return (
    <div className="w-full sm:w-[330px] md:w-[270px] lg:w-[330px] h-[438px]">
      <div className="rounded-md bg-[#F9F7F5] w-full h-[362px]">
        <div className="flex justify-between px-2 py-4 h-[25px]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8341 6.97829L15.5157 6.71373C13.8085 5.29483 11.9425 4.54612 10.0596 4.50077C8.00565 4.47231 6.09759 5.23586 4.65658 6.69945L15.8341 6.97829ZM15.8341 6.97829L16.1534 6.71495M15.8341 6.97829L16.1534 6.71495M16.1534 6.71495C18.4906 4.78767 21.1602 4.11507 23.6445 4.7888C26.1916 5.48288 28.2061 7.52845 28.8912 10.1292C29.6488 13.0066 28.6846 16.1384 26.1434 18.7226L26.1433 18.7226L16.4552 28.5759C16.4552 28.5759 16.4551 28.5759 16.4551 28.576C16.2803 28.753 16.0557 28.8395 15.8326 28.8395C15.6095 28.8395 15.3848 28.753 15.21 28.576C15.21 28.5759 15.2099 28.5759 15.2099 28.5759L5.5218 18.7226L5.52177 18.7226M16.1534 6.71495L5.52177 18.7226M5.52177 18.7226C1.31357 14.4432 1.9621 9.43993 4.65651 6.69953L5.52177 18.7226Z"
              stroke="#393939"
            />
          </svg>
          <button className="bg-white text-black rounded-[4px] h-[18px] py-[0.5px] px-[2.5px] text-[14px]">
            Art de la table
          </button>
        </div>
        <div className="flex items-center justify-center h-full">
          <Image src={table} alt="Logo" className="w-[224px] h-[224px]" />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-[24px]">
          <p className="font-playfair">Title</p>
          <p>
            0<sup>€</sup>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[14px] text-[#9c9c9c]">
            0,35€/Pièce · RÉF : VABGN5
          </p>
          <p className="text-[11px] text-[#546A7D] bg-[#f1f4f6] rounded-lg px-[8px] py-[4px]">
            20 pièces
          </p>
        </div>
      </div>
    </div>
  );
}
