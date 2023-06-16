import React, { createContext, useState } from 'react';
import { TempleWallet } from '@temple-wallet/dapp';
import { TezosToolkit } from '@taquito/taquito';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [tezos, setTezos] = useState(null);
  const [isSynced, setIsSynced] = useState(false);
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    if (TempleWallet.isAvailable()) {
      const wallet = new TempleWallet('My DApp');
      await wallet.connect('mainnet');
      const tezosToolkit = new TezosToolkit(wallet.toTezos());
      setTezos(tezosToolkit);
      const availableAddress = await wallet.getPKH();
      setAddress(availableAddress);
      setIsSynced(true);
    } else {
      console.log('Temple Wallet not available.');
    }
  }

  const disconnectWallet = () => {
    setTezos(null);
    setAddress(null);
    setIsSynced(false);
  }

  return (
    <WalletContext.Provider value={{ tezos, connectWallet, disconnectWallet, isSynced, address }}>
      {children}
    </WalletContext.Provider>
  );
};
