import { useQuery } from "@tanstack/react-query";
import { daysOfWeek } from "../../constants";
import { MainTableData } from "../../types/main-table";
import DataTable from "../../ui/DataTable";
import RowTable from "./RowTable";
import { getWeeklyShifts } from "../../services/getWeeklyShifts";

const MainTable = () => {
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

    const fixData: MainTableData[] = [];
    daysOfWeek.forEach((day) =>
        data?.map((item: any) => {
            if (day.code === item.week_Day) {
                fixData.push({
                    ...item,
                    week_Day: day.title,
                });
            }
        })
    );

    if (error) {
        return <h1>دریافت اطلاعات با مشکل مواجه شد</h1>;
    }

    return (
        <div>
            <DataTable
                otherClasses='shadow-lg'
                columns={`repeat(${specialty.length + 1}, 3fr)`}
            >
                <DataTable.Header>
                    <div>روز</div>
                    {specialty.map((item: string, index: number) => (
                        <div key={index + 1}>{item}</div>
                    ))}
                </DataTable.Header>

                <DataTable.Body
                    isLoading={isLoading}
                    data={daysOfWeek}
                    render={(day: any, index: number) => (
                        <RowTable
                            key={day.code}
                            dayOfWeek={day.title}
                            data={fixData}
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
