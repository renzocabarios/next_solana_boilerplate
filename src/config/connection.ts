import { clusterApiUrl, Connection } from "@solana/web3.js";
import { CLUSTER, COMMITMENT } from "../env";
const CONNECTION: Connection = new Connection(
  clusterApiUrl(CLUSTER),
  COMMITMENT
);

export { CONNECTION };
