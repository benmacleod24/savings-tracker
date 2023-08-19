export const getTimeDiff = (date1: Date, date2: Date) => {
	return new Date(date2.getTime() - date1.getTime());
};
