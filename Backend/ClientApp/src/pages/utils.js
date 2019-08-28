export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
};
export const formatType = (str) => {
    const splitType = str.toLowerCase().split('_').map(value => capitalizeFirstLetter(value));
    return splitType.join(' ');
};

export const removePlural = (str) => {
    let ret = str;
    if (str.toLowerCase().charAt(str.length - 1) === 's') {
        ret = ret.substr(0, str.length - 1);
    }
    return ret;
};

export const maskStr = (str) => {
    return str;
    return str.length > 0 ? str.replace(str.substring(2,str.length-2), '*'.repeat(str.length-4)) : str;
};