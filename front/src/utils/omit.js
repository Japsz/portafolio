const omit = (obj, keys) => {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
        if (!keys.includes(key)) {
            newObj[key] = obj[key];
        }
    });
    return newObj;
};
export default omit;