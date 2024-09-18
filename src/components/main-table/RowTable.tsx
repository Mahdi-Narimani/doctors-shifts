import DataTable from "../../ui/DataTable";

const RowTable = ({ data, dayOfWeek, isLastItem, specialty }: any) => {
    // آرایه‌ای که تمام ستون‌ها (تخصص‌ها) خالی باشن
    const row = Array(18).fill(null);

    // پر کردن ستون مربوط به هر تخصص
    data.forEach((item: any) => {
        if (item.week_Day === dayOfWeek) {
            const columnIndex = specialty[item.TB_TITLE] - 1;

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
        <DataTable.Row
            isLastItem={isLastItem}
        >
            <div className='text-center flex items-center justify-center gap-2 ml-2'>
                <span className='w-full py-4 rounded-md shadow-lg text-xl bg-pale-gray/70'>
                    {dayOfWeek}
                </span>
                <div className='flex flex-col space-y-2'>
                    <span className='w-auto p-2 rounded-md text-xl bg-dark-blue text-light-white'>
                        صبح
                    </span>
                    <span className='w-auto p-2 rounded-md text-xl bg-light-gray/50'>
                        عصر
                    </span>
                </div>
            </div>

            {row.map((cell, index) => (
                <div
                    key={index}
                    className='flex justify-center items-start text-[22px]'
                >
                    {cell ? (
                        <div className='flex flex-col items-center space-y-2 mx-1 w-full text-center'>
                            <div className='shift-morning space-y-2 rounded-md w-full py-2 px-1 bg-dark-blue text-light-white leading-7'>
                                {/* <strong>صبح: </strong> */}
                                {cell.morning.length > 0 ? (
                                    <div className='flex flex-col gap-1'>
                                        {cell.morning.map((item: string) => (
                                            <span>{item}</span>
                                        ))}
                                    </div>
                                ) : (
                                    <span>-</span>
                                )}
                            </div>
                            <div className='shift-evening space-y-2 rounded-md w-full py-2 px-1 bg-light-gray/50 leading-7'>
                                {/* <strong>عصر: </strong> */}
                                {cell.evening.length > 0 ? (
                                    <div className='flex flex-col gap-1'>
                                        {cell.evening.map((item: string) => (
                                            <span>{item}</span>
                                        ))}
                                    </div>
                                ) : (
                                    <span>-</span>
                                )}
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ))}
        </DataTable.Row>
    );
};

export default RowTable;
