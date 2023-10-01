import { Cluster, Commitment } from "@solana/web3.js";

export const PROGRAM_ID: string =
  import.meta.env.VITE_PROGRAM_ID || "program_id";
export const CLUSTER: Cluster = import.meta.env.VITE_CLUSTER || "devnet";
export const COMMITMENT: Commitment =
  import.meta.env.VITE_COMMITMENT || "processed";
