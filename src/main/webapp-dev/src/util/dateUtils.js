export const getDateMinusDays = (days = 30) => {
    const date = new Date();
    date.setDate(date.getDate() - days);

    return date.toLocaleDateString('en-CA');
};