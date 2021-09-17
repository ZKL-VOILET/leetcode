/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
 var getSkyline = function(buildings) {
    const result = [];
    for (let i = 0; i < buildings.length; i++) {
        let left = buildings[i][0];
        let right = buildings[i][1];
        let heightLeft = buildings[i][2];
        let heightRight = 0;
        for (let j = 0; j < buildings.length; j++) {
            if (buildings[j][0] <= left && buildings[j][1] > left) {
                heightLeft = Math.max(heightLeft, buildings[j][2]);
            }
            if (buildings[j][0] <= right && buildings[j][1] > right) {
                heightRight = Math.max(heightRight, buildings[j][2]); 
            }
        }
        result.push([left, heightLeft], [right, heightRight]);
    }
    result.sort((a, b) => a[0] - b[0]);
    let ans = result.filter((value, index, array) => {
        if (index > 0) {
            return value[1] != array[index-1][1];
        }else {
            return true;
        }
    });
    return ans;

};