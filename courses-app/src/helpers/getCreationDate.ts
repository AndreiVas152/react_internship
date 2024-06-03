export const getCreationDate = () => {

    const now = new Date();
    const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = now.getUTCDate().toString().padStart(2, '0');
    const year = now.getUTCFullYear().toString();

    return `${day}/${month}/${year}`
}