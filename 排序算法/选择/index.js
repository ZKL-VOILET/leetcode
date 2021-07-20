// 选择最小的值放在第一位，接着第二小的值放在第二位
function selecctSort(array) {
    let indexMin;
    for (let i = 0; i < array.length - 1; i++) {
        indexMin = i;
        for (let j = i; j < array.length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j;
            }
        }
        if (i != indexMin) {
            swap(array, i, indexMin);
        }
    }
    return array;
}