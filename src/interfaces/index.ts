import { AnchorProvider, Program } from "@coral-xyz/anchor";

export interface IWeb3Store {
  provider: null | AnchorProvider;
  wallet: null | string;
  posts: any[];
  setProvider: any;
  setWallet: any;
}

export type IProgram = Program<SampleIDL>;

export type SampleIDL = {
  version: "0.1.0";
  name: "anoni_dapp";
  instructions: [];
  accounts: [];
};
