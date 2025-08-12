export const convertedData = (item: any) => Object.entries(item).map(
    ([key, value]: any) => ({
        label: key,
        value: value
    })
);