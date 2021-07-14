/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     let ans = 0;
//     // 超时
//     for (let i = 0; i < height.length-1; i++) {
//         for (let j = i+1; j < height.length; j++) {
//             let min = Math.min(height[i], height[j]);
//             let size = min * (j-i);
//             ans = ans > size ? ans : size;
//         }
//     }
//     return ans;
// };

var maxArea = function(height) {
    // 双指针
    let ans = 0;
    let head = 0;
    let tail = height.length-1;
    while (head < tail) {
        let area = (tail - head) * Math.min(height[head], height[tail]);
        ans = ans > area ? ans : area;
        if (height[head] <= height[tail]) {
            head += 1;
        } else {
            tail -= 1;
        }
    }
    return ans;
};