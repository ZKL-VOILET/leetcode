// 假设第一项已排好序，第二项应该待在原位还是插到第一项之前，第三项以此类推
function insertSort(array) {
    let temp;
    for (let i = 1; i < array.length; i++) {
        let j = i;
        temp = array[i];
        while (j > 0 && array[j-1] > temp) {
            array[j] = array[j-1];
            j--;
        }
        array[j] = temp;
    }
    return array;
}