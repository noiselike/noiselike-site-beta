import React, { useContext } from 'react';
import { WalletContext } from './WalletContext.js';

export function Mint() {
  const { connectWallet, isSynced, address } = useContext(WalletContext);

  return (
    <h2>
      This is the Mint page
      <br /> <br />
      {address && <div>Connected Address: {address}</div>}
    </h2>
  );
}

export default Mint;
