import React from "react";
import Image from "next/image";
import logo from "/public/image.png";

export default function Footer() {
  return (
    <div className="mt-24 border-t-2 border-[#39393930] p-6 md:p-[30px] flex flex-col md:flex-row justify-between">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="w-[133px] h-[65px] mx-auto md:mx-0">
          <Image src={logo} alt="brand logo" />
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-[18px]">INFOS PRATIQUES</p>
          <ul className="text-[#393939] text-[14px] flex flex-col gap-4">
            <li>À propos</li>
            <li>Livraisons & Reprises</li>
            <li>Mode d’emploi</li>
            <li>F.A.Q</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-[18px]">LÉGAL</p>
          <ul className="text-[#393939] text-[14px] flex flex-col gap-4">
            <li>Mentions légales</li>
            <li>CGU</li>
            <li>CGV</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-[18px]">MON COMPTE</p>
          <ul className="text-[#393939] text-[14px] flex flex-col gap-4">
            <li>Accéder à mon compte</li>
            <li>Ma liste d’envie</li>
            <li>Créer un compte</li>
            <li>Mot de passe oublié</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 mt-8 md:mt-0">
        <p className="text-[18px]">NOUS SUIVRE</p>
        <div className="flex gap-6 justify-center md:justify-start">
          <div className="rounded-[6px] border border-[#393939] p-3">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7386 6.71083C19.7525 6.912 19.7525 7.11321 19.7525 7.31438C19.7525 13.4503 15.2157 20.5204 6.92385 20.5204C4.36928 20.5204 1.9962 19.7587 0 18.4367C0.362957 18.4798 0.711906 18.4942 1.08883 18.4942C3.19666 18.4942 5.13704 17.7614 6.68654 16.5112C4.7043 16.468 3.04313 15.1316 2.47079 13.2923C2.75 13.3354 3.02917 13.3641 3.32234 13.3641C3.72715 13.3641 4.132 13.3066 4.50888 13.2061C2.4429 12.7749 0.893363 10.9069 0.893363 8.65078V8.59332C1.49359 8.9382 2.19162 9.15375 2.93141 9.18245C1.71695 8.34898 0.921293 6.92637 0.921293 5.31693C0.921293 4.45475 1.1446 3.6644 1.53549 2.97464C3.75504 5.79114 7.09135 7.63047 10.8324 7.83168C10.7626 7.4868 10.7207 7.12759 10.7207 6.76833C10.7207 4.21045 12.7309 2.12683 15.2296 2.12683C16.5278 2.12683 17.7004 2.68726 18.524 3.59256C19.543 3.3914 20.5202 3.00339 21.3857 2.47171C21.0506 3.54948 20.3387 4.45479 19.4035 5.02955C20.3109 4.92901 21.1903 4.67029 21.9999 4.31108C21.3858 5.23072 20.618 6.04977 19.7386 6.71083Z"
                fill="#393939"
              />
            </svg>
          </div>
          <div className="rounded-[6px] border border-[#393939] p-3">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0046 6.23729C8.27178 6.23729 6.06748 8.50642 6.06748 11.3196C6.06748 14.1328 8.27178 16.4019 11.0046 16.4019C13.7374 16.4019 15.9417 14.1328 15.9417 11.3196C15.9417 8.50642 13.7374 6.23729 11.0046 6.23729ZM11.0046 14.6238C9.23857 14.6238 7.79482 13.142 7.79482 11.3196C7.79482 9.49723 9.23428 8.01544 11.0046 8.01544C12.7749 8.01544 14.2144 9.49723 14.2144 11.3196C14.2144 13.142 12.7706 14.6238 11.0046 14.6238ZM17.2952 6.0294C17.2952 6.68846 16.7796 7.21483 16.1437 7.21483C15.5034 7.21483 14.9921 6.68404 14.9921 6.0294C14.9921 5.37476 15.5077 4.84397 16.1437 4.84397C16.7796 4.84397 17.2952 5.37476 17.2952 6.0294ZM20.5651 7.23252C20.4921 5.64457 20.1397 4.23798 19.0097 3.07909C17.8839 1.92019 16.5175 1.55749 14.9749 1.47787C13.3851 1.38498 8.61982 1.38498 7.02998 1.47787C5.4917 1.55306 4.12529 1.91577 2.99521 3.07466C1.86514 4.23356 1.51709 5.64015 1.43975 7.2281C1.34951 8.8647 1.34951 13.7701 1.43975 15.4067C1.51279 16.9946 1.86514 18.4012 2.99521 19.5601C4.12529 20.719 5.4874 21.0817 7.02998 21.1613C8.61982 21.2542 13.3851 21.2542 14.9749 21.1613C16.5175 21.0862 17.8839 20.7234 19.0097 19.5601C20.1355 18.4012 20.4878 16.9946 20.5651 15.4067C20.6554 13.7701 20.6554 8.86913 20.5651 7.23252ZM18.5112 17.1627C18.1761 18.0297 17.5272 18.6976 16.6808 19.047C15.4132 19.5646 12.4054 19.4451 11.0046 19.4451C9.60381 19.4451 6.5917 19.5601 5.32842 19.047C4.48623 18.702 3.8374 18.0341 3.49795 17.1627C2.99521 15.8579 3.11123 12.7616 3.11123 11.3196C3.11123 9.87763 2.99951 6.77693 3.49795 5.47649C3.83311 4.60953 4.48193 3.94162 5.32842 3.59218C6.596 3.07466 9.60381 3.19409 11.0046 3.19409C12.4054 3.19409 15.4175 3.07909 16.6808 3.59218C17.523 3.9372 18.1718 4.60511 18.5112 5.47649C19.014 6.78135 18.8979 9.87763 18.8979 11.3196C18.8979 12.7616 19.014 15.8623 18.5112 17.1627Z"
                fill="#393939"
              />
            </svg>
          </div>
          <div className="rounded-[6px] border border-[#393939] p-3">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2481_1695)">
                <path
                  d="M5.68391 19.5731H1.69297V6.7211H5.68391V19.5731ZM3.68629 4.96798C2.41012 4.96798 1.375 3.91095 1.375 2.63477C1.375 2.02178 1.61851 1.4339 2.05196 1.00045C2.48541 0.566996 3.0733 0.323486 3.68629 0.323486C4.29928 0.323486 4.88717 0.566996 5.32062 1.00045C5.75407 1.4339 5.99758 2.02178 5.99758 2.63477C5.99758 3.91095 4.96203 4.96798 3.68629 4.96798ZM20.6207 19.5731H16.6384V13.3168C16.6384 11.8258 16.6083 9.91368 14.5634 9.91368C12.4884 9.91368 12.1705 11.5336 12.1705 13.2094V19.5731H8.18383V6.7211H12.0115V8.47423H12.0673C12.6002 7.46446 13.9017 6.39884 15.8434 6.39884C19.8825 6.39884 20.625 9.0586 20.625 12.5133V19.5731H20.6207Z"
                  fill="#393939"
                />
              </g>
              <defs>
                <clipPath id="clip0_2481_1695">
                  <rect
                    width="22"
                    height="22"
                    fill="white"
                    transform="translate(0 0.323486)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
