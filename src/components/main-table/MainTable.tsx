import { useQuery } from "@tanstack/react-query";
import { daysOfWeek } from "../../constants";
import { MainTableData } from "../../types/main-table";
import DataTable from "../../ui/DataTable";
import RowTable from "./RowTable";
import { getWeeklyShifts } from "../../services/getWeeklyShifts";
import { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Error from "../../ui/Error";

const MainTable = () => {
    const navigate: NavigateFunction = useNavigate();

    const { isLoading, error, data } = useQuery({
        queryKey: ["weekly-shifts"],
        queryFn: getWeeklyShifts,
    });

    let specialty: any = [];
    specialty = data?.map((item: any) => item.TB_TITLE);
    specialty = [...new Set(specialty)];
    const reversedSpecialty: any = {};
    specialty.forEach((value: string, index: number) => {
        // هر رشته به عنوان key و اندیس به عنوان value
        reversedSpecialty[value] = index + 1;
    });

    const finalData: MainTableData[] = [];
    daysOfWeek.forEach((day) =>
        data?.map((item: any) => {
            if (day.code === item.week_Day) {
                finalData.push({
                    ...item,
                    week_Day: day.title,
                });
            }
        })
    );

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                navigate("/daily-schedule");
            }, 40000);
        }
    });

    if (error) {
        return <Error message='دریافت اطلاعات با مشکل مواجه شد' />;
    }

    return (
        <div className='overflow-auto'>
            <DataTable
                otherClasses='shadow-lg'
                columns={`5.5fr repeat(${specialty.length}, 4.5fr)`}
            >
                <DataTable.Header>
                    <div className='flex items-center justify-center ml-2 max-xl:sticky right-0 top-0 max-xl:bg-light-white'>
                        <span className='w-full py-4 rounded-md shadow-lg bg-light-white/30 max-2xl:py-2'>
                            روز
                        </span>
                    </div>
                    {specialty.map((item: string, index: number) => (
                        <div
                            key={index + 1}
                            className='border-l-2'
                        >
                            {item}
                        </div>
                    ))}
                </DataTable.Header>

                <DataTable.Body
                    isLoading={isLoading}
                    data={daysOfWeek}
                    render={(day: any, index: number) => (
                        <RowTable
                            key={day.code}
                            dayOfWeek={day.title}
                            data={finalData}
                            isLastItem={index === daysOfWeek.length - 1}
                            specialty={reversedSpecialty}
                        />
                    )}
                ></DataTable.Body>
            </DataTable>
        </div>
    );
};

export default MainTable;
