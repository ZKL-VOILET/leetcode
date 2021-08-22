/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    // 同56-合并区间，先插入再合并重叠区间
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let start1 = result[result.length-1][0];
        let end1 = result[result.length-1][1];
        let start2 = intervals[i][0];
        let end2 = intervals[i][1];

        if (end1 >= start2) {
            let start = start1 < start2 ? start1 : start2;
            let end = end1 > end2 ? end1 : end2;
            result[result.length-1] = [start, end];
        }else {
            result.push(intervals[i]);
        }
    }
    return result;
};