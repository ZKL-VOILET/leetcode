/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function (candiesCount, queries) {
    const result = [];
    const sum = new Array(candiesCount.length + 1).fill(0);
    // 前缀和，减少时间复杂度
    for (let i = 1; i < sum.length; i++) {
        sum[i] = sum[i - 1] + candiesCount[i - 1];
    };
    console.log(sum)
    queries.forEach((element) => {
        const [favoriteTypei, favoriteDayi, dailyCapi] = element;
        // 这种方式时间复杂度高
        // const candyNum = candiesCount.slice(0, favoriteTypei+1).reduce((pre, cur) => {
        //     return pre + cur;
        // });
        const candyNum = sum[favoriteTypei + 1];
        const dayCount = Math.floor((candyNum - candiesCount[favoriteTypei]) / dailyCapi);
        if (favoriteDayi + 1 > candyNum || dayCount > favoriteDayi) {
            result.push(false);
        } else {
            result.push(true);
        }
    })
    return result;
};