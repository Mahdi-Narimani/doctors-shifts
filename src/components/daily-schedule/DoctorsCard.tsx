import { ConvertNumbersToHoursAndMinutes } from "../../utils/dateTime";

interface Props {
    doctorName: string;
    nationalId: string;
    expert: string;
    expertTitle: string;
    startTime: number;
    endTime: number;
}

const DoctorsCard = ({
    doctorName,
    nationalId,
    expert,
    expertTitle,
    startTime,
    endTime,
}: Props) => {
    return (
        <div className='animate-fadeInCardUp lg:h-full max-lg:h-[300px] md:w-full max-md:w-[60%] max-sm:w-[95%] mx-auto flex flex-col items-center justify-between lg:gap-4 max-lg:gap-2 shadow-lg lg:p-3 max-lg:p-4 rounded-lg border-[1px] border-pale-gray'>
            <img
                src={`/pics/${nationalId}.jpg`}
                alt={doctorName}
                className='lg:size-[240px] max-lg:size-[150px] rounded-[50%] border-2 border-dark-blue object-contain'
                onError={(e) => {
                    const target = e.target as HTMLImageElement;

                    if (target.src !== `/pics/${nationalId}.jpg`) {
                        target.onerror = null;
                        target.src = "/assets/images/doctor.png";
                    }
                }}
            />

            <div className='w-full flex flex-col lg:gap-3 max-lg:gap-2 lg:h-[15%] max-lg:h-20%'>
                <h2 className='font-semibold xl:text-2xl max-xl:text-lg max-lg:text-sm bg-dark-blue w-full py-2 rounded-lg text-white tracking-wider'>
                    {doctorName}
                </h2>
                <h3 className='xl:text-lg max-xl:text-base max-lg:text-xs flex gap-2 justify-center'>
                    <span className='text-dark-blue font-medium'>
                        {expertTitle}
                    </span>
                    <span className='font-bold'>{expert}</span>
                </h3>
            </div>

            <div className='bg-pale-gray py-2 px-4 rounded-lg shadow-md flex items-center gap-1 lg:h-[10%] max-lg:h-[15%]'>
                <img
                    src='/assets/icons/clock.svg'
                    alt='clock icon'
                />
                <h4 className='flex gap-2 xl:text-2xl max-xl:text-lg max-lg:text-sm'>
                    <span>{ConvertNumbersToHoursAndMinutes(startTime)}</span>
                    تا
                    <span> {ConvertNumbersToHoursAndMinutes(endTime)}</span>
                </h4>
            </div>
        </div>
    );
};

export default DoctorsCard;
