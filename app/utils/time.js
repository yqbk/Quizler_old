export const getDuration = (timeStart, timeEnd) => {
    const getDateFromTime = (time) => {
        const [hours, minutes] = time.split(':');
        const date = new Date();

        date.setHours(hours);
        date.setMinutes(minutes);

        return date;
    };

    const startDate = getDateFromTime(timeStart);
    const endDate = getDateFromTime(timeEnd);


    return Math.floor((endDate - startDate) / 60000);
};

export const getTime = (time) => {
    const date = new Date(time);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes}`;
};

export const getWeekNumber = (date: string): number => {
    // Create date object
    const d = new Date(date);

    d.setHours(0, 0, 0, 0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate((d.getDate() + 4) - (d.getDay() || 7));
    // Get first day of year
    const yearStart = new Date(d.getFullYear(), 0, 1);
    // Calculate full weeks to nearest Thursday
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
};


export const mergeTimeAndDate = (dateString: string, timeString: string): Date => {
    const dateOnly = dateString.substr(0, 11);
    const millisAndTimeZone = dateString.substr(16);
    const newDateString = dateOnly + timeString + millisAndTimeZone;
    return new Date(newDateString);
};
