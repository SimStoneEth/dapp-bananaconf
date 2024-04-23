"use client";

import { BrowserProvider, Contract, formatUnits, parseEther } from "ethers";
import { useState } from "react";

import abi from "./abi";

type Info = {
    account: string | undefined;
    saleActive: boolean;
    supply: number | undefined;
};

type HookOutput = {
    info: Info;
    busy: boolean;
    connect: () => Promise<void>;
    handleMint: () => Promise<void>;
};

const useWallet = (): HookOutput => {
    const [contract, setContract] = useState<Contract | undefined>(undefined);
    const [busy, setBusy] = useState<boolean>(false);
    const [info, setInfo] = useState<Info>({
        account: undefined,
        saleActive: false,
        supply: undefined,
    });

    const connect = async (): Promise<void> => {
        if (typeof window === "undefined" || !window.ethereum) {
            return alert(
                "Please download Metamask or use the Metamask browser",
            );
        }

        // const web3 = new Web3(window.ethereum);
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const contract = new Contract(
            process?.env?.["NEXT_PUBLIC_CONTRACT_ADDRESS"] as string,
            abi,
            signer,
        );

        setInfo(prev => ({ ...prev, account: signer.address }));
        setContract(contract);
        await getInfo(contract);

        // eslint-disable-next-line no-console
        console.log("metamask - connecting to : ", signer.address);
    };

    const getInfo = async (contract: Contract): Promise<void> => {
        if (typeof contract === "undefined") {
            return alert(
                "GET info - Something went wrong connecting to the contract",
            );
        }

        const supply = +formatUnits(await contract.totalSupply(), "wei");
        const saleActive = await contract.saleIsActive();

        // eslint-disable-next-line no-console
        console.log("GET info - data : ", supply, saleActive);

        setInfo(prev => ({ ...prev, saleActive, supply }));
    };

    const handleMint = async (): Promise<void> => {
        if (typeof contract === "undefined") {
            return alert(
                "POST mint - Something went wrong connecting to the contract",
            );
        }

        setBusy(true);
        const value = parseEther("0");
        const gasEstimate = await contract.mint.estimateGas(1, { value });

        await contract
            .mint(1, {
                value,
                gasLimit: gasEstimate,
            })
            .then(async result => await result.wait())
            .catch(error => console.log("something went wrong", error));

        await getInfo(contract);
        setBusy(false);
    };

    return {
        info,
        busy,
        connect,
        handleMint,
    };
};

export { useWallet as default };
