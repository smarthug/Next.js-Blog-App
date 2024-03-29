import Image from "next/image";
import React, { FC } from "react";

interface LogoIconProps {
  className?: string;
}

// const LogoIcon: FC<LogoIconProps> = ({ className = "" }) => {
//   return (
//     <svg
//       width="48"
//       height="48"
//       viewBox="0 0 48 48"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//     >
//       <g clipPath="url(#clip0_1_2)">
//         <path
//           d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0Z"
//           fill="#DC5425"
//         />
//         <path
//           d="M15.5107 37V11.5455H25.255C27.0945 11.5455 28.6232 11.8355 29.8413 12.4155C31.0676 12.9872 31.9832 13.7702 32.5881 14.7646C33.2012 15.7589 33.5078 16.8858 33.5078 18.1452C33.5078 19.181 33.3089 20.0676 32.9112 20.805C32.5135 21.5342 31.979 22.1267 31.3079 22.5824C30.6367 23.0381 29.8868 23.3654 29.0582 23.5643V23.8129C29.9614 23.8626 30.8273 24.1402 31.6559 24.6456C32.4928 25.1428 33.1764 25.8471 33.7067 26.7585C34.237 27.67 34.5021 28.772 34.5021 30.0646C34.5021 31.3821 34.1831 32.567 33.5451 33.6193C32.9071 34.6634 31.9459 35.4878 30.6616 36.0927C29.3772 36.6976 27.7615 37 25.8143 37H15.5107ZM20.1218 33.147H25.081C26.7547 33.147 27.9603 32.828 28.6978 32.19C29.4435 31.5437 29.8164 30.7151 29.8164 29.7042C29.8164 28.9502 29.63 28.2707 29.2571 27.6658C28.8842 27.0527 28.3539 26.5721 27.6662 26.2241C26.9785 25.8678 26.1581 25.6896 25.2053 25.6896H20.1218V33.147ZM20.1218 22.3711H24.6832C25.4787 22.3711 26.1954 22.2261 26.8335 21.9361C27.4715 21.6378 27.9728 21.2193 28.3374 20.6808C28.7102 20.1339 28.8967 19.4876 28.8967 18.7418C28.8967 17.7558 28.5487 16.9438 27.8526 16.3058C27.1649 15.6677 26.1416 15.3487 24.7827 15.3487H20.1218V22.3711Z"
//           fill="white"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_1_2">
//           <rect width="48" height="48" fill="white" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// };

const LogoIcon = ({ className = "" }) => {
  return (
    <div className={className}>
      <Image
        src="/favicons/android-chrome-192x192.png" // Replace with the path to your Next.js logo image in the public folder
        alt="Next.js Logo"
        width={48}
        height={48}
        layout="intrinsic" // This can be 'fixed', 'intrinsic', 'responsive', or 'fill'. Adjust as needed.
      />
    </div>
  );
};

// export default NextJsLogo

export default LogoIcon;
