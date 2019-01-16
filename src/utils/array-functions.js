export const firstOrDefault = (array, match) => {
    if (array) {
        var result = array.find(match);
        return result !== undefined ? result : {};
    } else return {};
}