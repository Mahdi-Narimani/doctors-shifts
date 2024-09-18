export const getWeeklyShifts = async () =>
{
    const res = await fetch(import.meta.env.VITE_WEEKLY_SHIFT_API);
    const data = await res.json();
    return data;
}