/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    const set = [...new Set(nums)];
    let head = 0;
    let tail = set.length - 1;


    while (head < tail) {
        let mid = Math.floor((head+tail)/2);
        if (set[mid] > set[tail]) {
            head = mid + 1;
        }else {
            tail = mid;
        }
    }
    return set[head];
};