import { PublicKey } from "@solana/web3.js";
import { useWeb3Store } from "./states";
import { getProgramInstance, PROVIDER } from "./config";
import { createPost } from "./instructions";
import { IWeb3Store } from "./interfaces";
import { useEffect } from "react";

function App() {
  const { posts, setWallet, wallet } = useWeb3Store() as IWeb3Store;

  const sample = async () => {
    if (PROVIDER && wallet) {
      const program = getProgramInstance(PROVIDER);
      await createPost(program, new PublicKey(wallet));
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <button onClick={setWallet}>{wallet}</button>
      <button onClick={sample}>Create</button>
    </>
  );
}

export default App;
