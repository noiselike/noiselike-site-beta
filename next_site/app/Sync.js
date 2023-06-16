import React, { useContext } from 'react';
import { WalletContext } from './WalletContext.js';

const Sync = () => {
  const { tezos, connectWallet, disconnectWallet, isSynced } = useContext(WalletContext);

  return (
    <>
    {!isSynced ? (
      <button onClick={connectWallet} class="button button1" type="button">
        Sync
      </button>
    ) : (
      <button onClick={disconnectWallet} class="button button1" type="button">
        Unsync
      </button>
    )}
    </>
  );
};

export default Sync;
