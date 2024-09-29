import { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDailySchedule } from "../../services/getDailySchedule";
import { toDayName } from "../../utils/dateTime";
import DoctorsCard from "./DoctorsCard";
import Spinner from "../../ui/Spinner";
import EmptyData from "../../ui/EmptyData";
import Error from "../../ui/Error";
import { PAGE_DAILY_SCHEDULE_TIME } from "../../constants";
import usePageTimer from "../../hooks/usePageTimer";
import ProgressBar from "../../ui/ProgressBar";

interface DailyScheduleItem {
    DOCTOR_NAME: string;
    PP_ID: string;
    EXPERT: string;
    EX_TITLE: string;
    START_TIME: number;
    END_TIME: number;
}

const DailySchedule = () => {
    const navigate: NavigateFunction = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: ["daily-schedule"],
        queryFn: getDailySchedule,
    });

    const today: string = toDayName();
    const todayDate: string = new Intl.DateTimeFormat("fa-IR").format(
        new Date()
    );

    useEffect(() => {
        if (!error && !isLoading) {
            setTimeout(() => {
                navigate("/");
            }, PAGE_DAILY_SCHEDULE_TIME);
        }
    }, [isLoading]);

    const progress = usePageTimer(PAGE_DAILY_SCHEDULE_TIME, "/", isLoading);

    if (error) {
        return <Error message='دریافت اطلاعات با خطا مواجه شد' />;
    }

    return (
        <>
            <ProgressBar progress={progress} />
            <section className='h-[calc(100vh-8px)] flex flex-col items-center sm:px-10'>
                <h1 className='text-center text-4xl max-2xl:text-2xl max-sm:text-lg my-6'>
                    لیست پزشکان روز {today} {todayDate}
                </h1>
                {isLoading ? (
                    <Spinner />
                ) : data.length > 0 ? (
                    <div className='w-full text-center grid 2xl:grid-cols-6 2xl:grid-rows-2 max-2xl:grid-cols-4 max-2xl:grid-rows-3 max-lg:grid-cols-2 max-lg:grid-rows-6 max-md:grid-cols-1 max-md:grid-rows-12 gap-5 px-2'>
                        {data?.map((item: DailyScheduleItem, index: number) => (
                            <DoctorsCard
                                key={index}
                                doctorName={item.DOCTOR_NAME}
                                nationalId={item.PP_ID}
                                expert={item.EXPERT}
                                expertTitle={item.EX_TITLE}
                                startTime={item.START_TIME}
                                endTime={item.END_TIME}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyData />
                )}
            </section>
        </>
    );
};

export default DailySchedule;
