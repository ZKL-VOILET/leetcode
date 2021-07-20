// 主元，双指针

function quickSort(array, left=0, right = array.length - 1) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index-1) {
            quickSort(array, left, index-1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
}

function partition(array, left, right) {
    const pivot = array[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }   
    }
    return i;
}