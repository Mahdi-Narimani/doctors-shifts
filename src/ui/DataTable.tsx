import React, { createContext, useContext } from "react";

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
                className={`${otherClasses} text-sm bg-light-white rounded-lg overflow-hidden px-1`}
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
            className={`grid items-center py-3 bg-pale-gray font-medium text-gray-600 shadow-md shadow-light-gray/50 text-center`}
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
            className={`grid py-3 ${
                !isLastItem ? "border-b-[1px] border-light-gray/45" : ""
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
    if (data.length === 0) return <p>اطلاعات در دسترس نیست⛔</p>;
    return (
        <section className='overflow-hidden my-2'>
            {isLoading ? <h1>در حال بارگذاری اطلاعات</h1> : data.map(render)}
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
