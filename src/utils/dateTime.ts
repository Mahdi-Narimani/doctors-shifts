export const ConvertNumbersToHoursAndMinutes = (num: number) =>
{
    const hours = Math.floor(num / 60).toString().padStart(2, '0');
    const minutes = (num % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}

export const toDayName = (): string =>
{
    const today: Date = new Date();
    const option: any = { weekday: "long" };
    return new Intl.DateTimeFormat("fa-IR", option).format(today);
}