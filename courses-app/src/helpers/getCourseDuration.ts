
export default function GetCourseDuration(minutes: number) : string{

    const hh = Math.floor(minutes / 60)
    const mm = minutes % 60;
    const hhFormatted = hh < 10 ? `0${hh}` : hh;
    const mmFormatted = mm < 10 ? `0${mm}` : mm;
    const label = hh === 1 ? 'hour' : 'hours';

    return `${hhFormatted}:${mmFormatted} ${label}`
}