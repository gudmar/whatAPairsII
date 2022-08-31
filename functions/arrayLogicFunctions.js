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

const removeSubarrayFromArray = (arr, subarr) => {
    return subarr.reduce((acc, item) => {
        const index = acc.findIndex(i => i === item);
        if (index >= 0) acc.splice(index, 1);
        return acc
    }, arr)
}

const xor = (arr1, arr2) => {
    if (arr1.length === 0) return arrCp(arr2);
    if (arr2.length === 0) return arrCp(arr1);
    const conjunction = and(arr1, arr2);
    const alternative = [...arr1, ...arr2];
    return removeSubarrayFromArray(alternative, [...conjunction,...conjunction])
}

const getArrayOfNull = nrOfElements => {
    const arr = new Array(nrOfElements);
    return arr.fill(null)
}

// module.exports = { xor };
export { and, xor, getArrayOfNull }