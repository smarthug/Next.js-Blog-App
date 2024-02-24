'use client';
import Web3 from "web3";
import Contract from "./Contract.json";
import { useAccount } from 'wagmi'; // Account 타입을 임포트합니다.

// Account 인터페이스로 account 타입을 명시합니다.
export async function daoUtil(account: String | undefined): Promise<number> {
    if (!account) return 0; // account가 undefined인 경우 0을 반환합니다.

    const web3 = new Web3(window.ethereum);
    
    const checkNFT = async (): Promise<number> => {
        const nftABI = Contract.NFTABI;
        const nftAddress = Contract.NFTContract;
        const contract = new web3.eth.Contract(nftABI, nftAddress);
        return contract.methods.balanceOf(account).call();
    }

    const nftNum = await checkNFT();
    return nftNum;
}
