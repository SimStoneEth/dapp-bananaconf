"use client";

import Image from "next/image";
import { type ReactElement } from "react";

import { useWallet } from "@/integrations/web3";

import { Button } from "../button/button";

const CtaSection = (): ReactElement => {
    const { info, busy, connect, handleMint } = useWallet();

    return (
        <>
            <Image
                className="w-full max-w-7xl h-auto max-h-[768px] object-contain absolute z-10 opacity-25"
                src={"/token.png"}
                alt={"Example of the attendance token"}
                width={1024}
                height={1024}
            />
            <div className="relative z-50">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Get your token here 👇🏼
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        As a token of appreciation for those who participated in
                        the developer workshop, we are excited to offer a
                        complimentary token to each attendee.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button
                            onClick={async () => {
                                if (!info.account) {
                                    return await connect();
                                }

                                return handleMint();
                            }}
                        >
                            {!info.account
                                ? "Connect"
                                : !info.saleActive
                                  ? "Closed"
                                  : busy
                                    ? "Minting"
                                    : "Mint"}
                        </Button>
                        <a
                            href="https://opensea.io/collection/unidentified-contract-fc91f7bb-4140-49fd-8b1a-81eb"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Opensea <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                    <p className="mt-10 text-lg leading-8 text-gray-600">
                        Tokens minted: {info.supply ?? "?"}
                    </p>
                </div>
            </div>
        </>
    );
};

export { CtaSection };
