'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { FaArrowCircleDown } from 'react-icons/fa';

export default function PrintButton() {
    const pathname = usePathname();

    return (
        <button
            title="Save Resume"
            type="button"
            className="printButton w-fit mt-5 mx-auto p-2 rounded-full text-white bg-black hover:invert hover:shadow-lg duration-300 animate-bounce cursor-pointer"
            onClick={() => {
                const newWindow = window.open(pathname, "_blank");
                if (newWindow) {
                    newWindow.onload = () => {
                        const header =
                            newWindow.document.getElementsByTagName("header")[0];
                        const footer =
                            newWindow.document.getElementsByTagName("footer")[0];
                        const printButton =
                            newWindow.document.getElementsByClassName("printButton")[0];

                        if (header) header.remove();
                        if (footer) footer.remove();
                        if (printButton) printButton.remove();

                        newWindow.print();
                    };
                }
            }}
        >
            <FaArrowCircleDown
                size={32}
                className="rounded-full text-white bg-black"
            />
        </button>
    )
}
