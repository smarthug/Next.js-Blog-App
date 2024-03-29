'use client';
import { LoginMenu } from "@/components/login";
import { IconWrapperRounded, LogoIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAccount } from 'wagmi'; // Hook을 컴포넌트에서 사용
import { daoUtil } from "@/utils/web3/daoUtil";
import { MainDesktopNavigationMenu } from "./menu";

import { ConnectButton } from '@rainbow-me/rainbowkit';

const MainDesktopNavigation = () => {
  const [nftNum, setNftNum] = useState<number>(0);
  const { address } = useAccount();
  

  useEffect(() => {
    const fetchNFTNum = async () => {
      const num = await daoUtil(address);
      console.log(num);
      setNftNum(num);
    };

    fetchNFTNum();
  });
  return (
    <>
      <nav className="mx-auto hidden max-w-8xl items-center justify-between px-2 py-4 md:flex">
        {/* Logo */}
        <div className="flex flex-1 justify-start pl-2">
          <Link href="/">
            <IconWrapperRounded>
              <LogoIcon className="h-10 w-10" />
            </IconWrapperRounded>
          </Link>
          <div className="mx-3 flex  items-center justify-center">
            {/* <img
              src="your-image-url.jpg"
              alt="Description"
              className="max-h-full max-w-full"
            /> */}
            <Image src="/images/typo.png" alt="Typo" width={100} height={1} />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div className="flex flex-1 gap-x-6">
            <MainDesktopNavigationMenu daoMember={nftNum} />
          </div>
        </div>

        {/* Login Menu */}
        <div className="flex flex-1 justify-end gap-2">
          <LoginMenu />
          

          <ConnectButton />
          

        </div>
      </nav>
    </>
  );
};

export default MainDesktopNavigation;
