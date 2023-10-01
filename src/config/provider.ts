import { AnchorProvider } from "@coral-xyz/anchor";
import { CONNECTION } from "./connection";
import { COMMITMENT } from "../env";

const { solana } = window as any;
const PROVIDER: AnchorProvider = new AnchorProvider(CONNECTION, solana, {
  commitment: COMMITMENT,
});

export { PROVIDER };
