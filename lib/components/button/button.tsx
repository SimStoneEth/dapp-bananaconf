import { type ReactElement } from "react";

type ButtonProps = {
    children: string | ReactElement;
    onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps): ReactElement => (
    <button
        type="button"
        className="rounded-md bg-banana-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-banana-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-banana-500"
        onClick={onClick}
    >
        {children}
    </button>
);

export { Button };
