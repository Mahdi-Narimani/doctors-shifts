export const getWeeklyShifts = async () =>
{
    // , { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json', } }
    const res = await fetch(import.meta.env.VITE_WEEKLY_SHIFT_API);
    const data = await res.json();
    console.log(data);

    return data;
}