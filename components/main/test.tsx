'use client';
import { useAccount, useEnsName } from 'wagmi'

export default function Test() {
  const { address } = useAccount()



    return (
      <div>
        <h1>Test</h1>
        <p>Address: {address}</p>
      </div>
    )
}