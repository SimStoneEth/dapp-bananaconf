import Image from "next/image";
import Link from "next/link";
import { type ReactElement } from "react";

const navigation = [
    { name: "Telegram", href: "https://t.me/+kJzGLnEa0aMyNDk0" },
    { name: "Twitter", href: "https://twitter.com/BananaConfXYZ" },
];

const Header = (): ReactElement => (
    <header className="bg-white font-header">
        <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
        >
            <Link href={"/"}>
                <Image
                    className="h-8 w-auto"
                    src={"/logo.webp"}
                    alt={"The BananaConf Logo"}
                    width={900}
                    height={199}
                />
            </Link>
            <div className="flex items-center gap-x-3 sm:gap-x-12">
                {navigation.map(item => (
                    <a
                        key={item.name}
                        href={item.href}
                        rel="noreferrer noopener"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    </header>
);

export { Header };
