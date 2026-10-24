export const getSwedishDateKey = () =>
    new Intl.DateTimeFormat('sv-SE', {
        timeZone: 'Europe/Stockholm',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(new Date());

export const formatSavedAt = (savedAt: string) =>
    new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(new Date(savedAt));

export const getCourseHcp = (hcpIndex: number, slopeRating: number, courseRating: number, par: number) =>
    hcpIndex * (slopeRating / 113) + courseRating - par;
