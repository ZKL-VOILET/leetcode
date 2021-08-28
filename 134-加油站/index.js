/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    const length = gas.length;
    const start = [];
    let result = -1;

    const helper = (index) => {
        const originIndex = index;
        let rest = 0;
        for (let i = 0; i < length; i++) {
            if (gas[index%length] - cost[index%length] + rest >= 0) {
                rest += gas[index%length] - cost[index%length];
                index++;
            }else {
                return -1;
            }
            if (index%length === originIndex) {
                return originIndex;
            }
        }

    }

    for (let i = 0; i < gas.length; i++) {
        if (gas[i] >= cost[i]) {
            let res = helper(i);
            if (res > -1) result = res;
        }
    }

    return result;
};