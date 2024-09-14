import { specialtyColumns } from "../../constants";
import DataTable from "../../ui/DataTable";

const RowTable = ({ data, dayOfWeek, isLastItem }: any) => {
    // آرایه‌ای که تمام ستون‌ها (تخصص‌ها) خالی باشن
    const row = Array(18).fill(null);

    // پر کردن ستون مربوط به هر تخصص
    data.forEach((item: any) => {
        if (item.week_Day === dayOfWeek) {
            const columnIndex = specialtyColumns[item.TB_TITLE] - 1;

            // اگر سلول برای تخصص هنوز ایجاد نشده، آرایه‌ها برای شیفت‌های صبح و عصر می‌سازیم
            if (!row[columnIndex]) {
                row[columnIndex] = { morning: [], evening: [] };
            }

            // بر اساس شیفت، دکتر را به آرایه مناسب اضافه می‌کنیم
            if (item.SHIFT_ID === 1) {
                row[columnIndex].morning.push(item.name);
            } else if (item.SHIFT_ID === 2) {
                row[columnIndex].evening.push(item.name);
            }
        }
    });

    return (
        <DataTable.Row isLastItem={isLastItem}>
            <div className='text-center flex items-center justify-center'>
                <span className='w-full py-2 rounded-md shadow-lg text-lg bg-pale-gray ml-1'>
                    {dayOfWeek}
                </span>
            </div>

            {row.map((cell, index) => (
                <div
                    key={index}
                    className='flex justify-center items-center gap-1'
                >
                    {cell ? (
                        <div className='flex flex-col justify-center items-center space-y-1 mx-1 w-full p-1'>
                            <div className='shift-morning rounded-md w-full py-[2px] px-1 bg-dark-blue text-light-white'>
                                <strong>صبح: </strong>
                                {cell.morning.length > 0 ? (
                                    <div className='flex flex-col gap-1'>
                                        {cell.morning.map((item: string) => (
                                            <span>{item}</span>
                                        ))}
                                    </div>
                                ) : (
                                    <span>x</span>
                                )}
                            </div>
                            <div className='shift-evening rounded-md w-full py-[2px] px-1 bg-light-gray/50'>
                                <strong>عصر: </strong>
                                {cell.evening.length > 0 ? (
                                    <div className='flex flex-col gap-1'>
                                        {cell.evening.map((item: string) => (
                                            <span>{item}</span>
                                        ))}
                                    </div>
                                ) : (
                                    <span>x</span>
                                )}
                            </div>
                        </div>
                    ) : (
                        <span>x</span>
                    )}
                </div>
            ))}
        </DataTable.Row>
    );
};

export default RowTable;
