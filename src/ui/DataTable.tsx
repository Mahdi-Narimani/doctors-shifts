import React, { createContext, useContext } from "react";
import EmptyData from "./EmptyData";
import Spinner from "./Spinner";

interface Props {
    children: React.ReactNode;
    columns: string;
    otherClasses?: string;
}

const DataTableContext = createContext({});

const DataTable = ({ children, columns, otherClasses }: Props) => {
    return (
        <DataTableContext.Provider value={{ columns }}>
            <div
                className={`${otherClasses} text-sm bg-light-white rounded-lg px-1  max-xl:w-[2200px]`}
                role='table'
            >
                {children}
            </div>
        </DataTableContext.Provider>
    );
};

const Header = ({ children }: { children: React.ReactNode }) => {
    const { columns }: any = useContext(DataTableContext);

    return (
        <header
            className={`grid items-center py-3 bg-pale-gray text-lg font-semibold text-gray-600 shadow-md shadow-light-gray text-center max-2xl:text-xs max-2xl:p-2`}
            style={{
                gridTemplateColumns: columns,
            }}
            role='row'
        >
            {children}
        </header>
    );
};

const Row = ({
    children,
    isLastItem,
}: {
    children: React.ReactNode;
    isLastItem?: boolean;
}) => {
    const { columns }: any = useContext(DataTableContext);

    return (
        <div
            className={`grid items-start py-4 max-2xl:py-1 ${
                !isLastItem ? "border-b-2 border-slate-600" : ""
            } `}
            style={{
                gridTemplateColumns: columns,
            }}
            role='row'
        >
            {children}
        </div>
    );
};

const Body = ({
    data,
    render,
    isLoading,
}: {
    data: any;
    render: any;
    isLoading: boolean;
}) => {
    if (data.length === 0) return <EmptyData />;
    return (
        <section className='my-2'>
            {isLoading ? <Spinner /> : data.map(render)}
        </section>
    );
};

// const Footer = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <footer className='w-full absolute bottom-0 left-0 right-0'>
//             <div className='flex justify-center py-1'>{children}</div>
//         </footer>
//     );
// };

DataTable.Header = Header;
DataTable.Row = Row;
DataTable.Body = Body;
// DataTable.Footer = Footer;

export default DataTable;
