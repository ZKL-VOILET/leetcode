// 分而治之，将原始数组分成较小的数组，直至只有一个值，然后归并成较大的数组

function mergeSort(array) {
    if (array.length > 1) {
        const middle = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, middle));
        const right = mergeSort(array.slice(middle, array.length));
        array = merge(left, right);
    }
    return array;
}

function merge(left, right) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++])
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}