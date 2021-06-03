import { ApiPromise } from '@polkadot/api';

export default async function SocietyApi() {
  let a = ""

  const api = await ApiPromise.create();

  api.rpc.chain.subscribeNewHeads((header) => {
    console.log(`Chain is at #${header.number}`);

    return header.number;
  });

  return a;
}
