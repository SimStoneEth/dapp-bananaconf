import { BrowserProvider, Contract } from "ethers";

import abi from "./abi";

type ConnectOutput = {
    contract: Contract;
    account: string;
};

const connect = async (): Promise<ConnectOutput> => {
    if (typeof window === "undefined" || !window.ethereum) {
        alert("Please download Metamask or use the Metamask browser");
    }

    // const web3 = new Web3(window.ethereum);
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new Contract(
        process?.env?.["NEXT_PUBLIC_CONTRACT_ADDRESS"] as string,
        abi,
        signer,
    );

    // eslint-disable-next-line no-console
    console.log("metamask - connecting to : ", signer.address);
    return { contract, account: signer.address };
};

export { connect, type ConnectOutput };
