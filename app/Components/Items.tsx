import ItemCart from "./ItemCart";

export default function Items() {
  return (
    <div className="mt-2 w-full p-4 relative min-h-screen">
      <div className="flex justify-between items-center h-[43px]">
        <p className="text-[20px] md:text-[34px]">Articles similaires</p>
        <p className="text-[13px] md:text-[16px] underline">
          Voir toute la collection
        </p>
      </div>
      <div className="relative mt-4 flex items-center">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[46px] h-[46px] bg-[#5CD2DD] flex items-center justify-center z-10 cursor-pointer">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8H1M1 8L8 1M1 8L8 15"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-wrap gap-[12px] justify-between w-full">
          <ItemCart size={330} />
          <ItemCart size={330} />
          <ItemCart size={330} />
          <ItemCart size={330} />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[46px] h-[46px] bg-[#5CD2DD] flex items-center justify-center z-10 cursor-pointer">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8H15M15 8L8 1M15 8L8 15"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div>
        <div className="mt-[60px] flex justify-between items-center h-[43px] relative">
          <p className="text-[20px] md:text-[34px]">
            Ces produits pourraient vous intéresser
          </p>
          <p className="text-[13px] md:text-[16px] underline">
            Voir toute la collection
          </p>
        </div>
        <div className="mt-6 md:mt-4 flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-6">
          <ItemCart size={506} />
          <ItemCart size={506} />
          <ItemCart size={506} />
        </div>
      </div>
    </div>
  );
}
