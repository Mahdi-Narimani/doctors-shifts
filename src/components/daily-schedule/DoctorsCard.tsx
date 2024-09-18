import { ConvertNumbersToHoursAndMinutes } from "../../utils/dateTime";

interface Props {
    doctorName: string;
    nationalId: string;
    expert: string;
    expertTitle: string;
    startTime: number;
    endTime: number;
    imgURL?: string;
}

const DoctorsCard = ({
    doctorName,
    // nationalId,
    expert,
    expertTitle,
    startTime,
    endTime,
    imgURL,
}: Props) => {
    return (
        <div className='h-full flex flex-col items-center justify-between gap-4 shadow-md p-3 rounded-lg border-[1px] border-pale-gray'>
            <div className='w-[70%] rounded-full border-2 border-dark-blue'>
                {imgURL ? (
                    <img
                        src={""}
                        alt={doctorName}
                    />
                ) : (
                    <img
                        src={"/assets/images/doctor.png"}
                        alt={doctorName}
                    />
                )}
            </div>
            <div className='flex flex-col gap-3 h-[15%]'>
                <h2 className='font-semibold text-2xl'>{doctorName}</h2>
                <h3 className='text-lg text-slate-600'>
                    {expertTitle} {expert}
                </h3>
            </div>

            <div className='bg-pale-gray py-2 px-4 rounded-lg shadow-md flex items-center gap-1 h-[10%]'>
                <img
                    src='/assets/icons/clock.svg'
                    alt='clock icon'
                />
                <h4 className='flex gap-2 text-2xl'>
                    <span>{ConvertNumbersToHoursAndMinutes(startTime)}</span>
                    تا
                    <span> {ConvertNumbersToHoursAndMinutes(endTime)}</span>
                </h4>
            </div>
        </div>
    );
};

export default DoctorsCard;
