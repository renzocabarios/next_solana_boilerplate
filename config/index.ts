import { RPC_URL } from "@/env";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-unsafe-burner";
import { clusterApiUrl } from "@solana/web3.js";

export const WALLETS = [new UnsafeBurnerWalletAdapter()];
