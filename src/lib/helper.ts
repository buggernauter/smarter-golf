export const getSwedishDateKey = () =>
    new Intl.DateTimeFormat('sv-SE', {
        timeZone: 'Europe/Stockholm',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(new Date());

export const formatSavedAt = (savedAt: string) =>
    new Intl.DateTimeFormat('sv-SE', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(new Date(savedAt));
