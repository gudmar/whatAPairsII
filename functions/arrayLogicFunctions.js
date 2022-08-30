const arrCp = arr => arr.map( _ => _ );

const and = (arr1, arr2) => {
    const a1 = arrCp(arr1);
    const a2 = arrCp(arr2);
    return a1.reduce((acc, item) => {
        const indexIn2 = a2.findIndex(i => i === item);
        if (indexIn2 === -1) return acc;
        acc.push(a2[indexIn2]);
        a2.splice(indexIn2, 1);
        return acc
    }, [])
}

const xor = (arr1, arr2) => {
    if (arr1.length === 0) return arrCp(arr2);
    if (arr2.length === 0) return arrCp(arr1);
    return arr1.reduce((acc, item) => {
        const isItemInBothArrays = arr2.find(i => item === i) === undefined ? false : true;
        if (!isItemInBothArrays) acc.push(item);
        return acc;
    }, [])  // TEST THIS FUNCTION WELL
}

// module.exports = { xor };
export { and, xor }