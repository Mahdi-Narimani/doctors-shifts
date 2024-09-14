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
                // columns='3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr'
                columns='repeat(19, 3fr)'
            >
                <DataTable.Header>
                    <div>روز</div>
                    <div>چشم</div>
                    <div>اعصاب و روان</div>
                    <div>مغز و اعصاب</div>
                    <div>گوش و حلق و بینی</div>
                    <div>جراح عمومی</div>
                    <div>ارتوپدی</div>
                    <div>فیزیوتراپی</div>
                    <div>زنان و زایمان</div>
                    <div>طب فیزیکی</div>
                    <div>داخلی و عفونی</div>
                    <div>قلب و عروق</div>
                    <div>تغذیه</div>
                    <div>پوست</div>
                    <div>اطفال</div>
                    <div>کلیه و مجاری</div>
                    <div>روانشناسی</div>
                    <div>گوارش</div>
                    <div>داخلی</div>
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
                        />
                    )}
                ></DataTable.Body>
            </DataTable>
        </div>
    );
};

export default MainTable;
