import PrintButton from "../_components/PrintButton";

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col p-1 bg-gray-200 text-black dark:bg-slate-800 dark:text-white">
            {children}
            <PrintButton />
        </div>
    );
}
