/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    const ver1 = version1.split('.');
    const ver2 = version2.split('.');
    const len1 = ver1.length;
    const len2 = ver2.length;

    for (let i = 0; i < Math.max(len1, len2); i++) {
        let str1 = i < len1 ? ver1[i] : '0';
        let str2 = i < len2 ? ver2[i] : '0';
        if (parseInt(str1) === parseInt(str2)) {
            continue;
        }else if (parseInt(str1) > parseInt(str2)) {
            return 1;
        }else {
            return -1;
        }
    }
    return 0;
};