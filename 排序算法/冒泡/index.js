function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1); // 交换
            }
        }
    }
    return array;
}