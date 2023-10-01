import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { IDL } from "./idl";
import { SampleIDL, IProgram } from "../interfaces";
import { PROGRAM_ID } from "../env";

const PROGRAM: PublicKey = new PublicKey(PROGRAM_ID);

function getProgramInstance(provider: AnchorProvider): IProgram {
  return new Program<SampleIDL>(IDL, PROGRAM, provider);
}

export { PROGRAM, getProgramInstance };
