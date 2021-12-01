import React from "react";
import "./App.css";
import {   getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
  getLedgerWallet,
  getMathWallet,
  getSolongWallet,
  getCoin98Wallet,
  getBloctoWallet,
  getSafePalWallet,
  getBitpieWallet,
  getSolflareWebWallet,
 } from "@solana/wallet-adapter-wallets";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider
} from "@solana/wallet-adapter-react-ui";
import Home from "./Home";

require("@solana/wallet-adapter-react-ui/styles.css");

const wallets = [
  getPhantomWallet(),
  getSolflareWallet(),
  getSolletWallet(),
  getSolletExtensionWallet(),
  getLedgerWallet(),
  getMathWallet(),
  getSolongWallet(),
  getCoin98Wallet(),
  getBloctoWallet(),
  getSafePalWallet(),
  getSlopeWallet(),
  getBitpieWallet(),
  getSolflareWebWallet()
];

const AppWithProvider = () => (
  <ConnectionProvider endpoint="https://api.devnet.solana.com">
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <Home />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
);

export default AppWithProvider;
