export const getDailySchedule = async () =>
{
    const res = await fetch(import.meta.env.VITE_DAILY_SCHEDULE);
    const data = await res.json();
    return data;
}

