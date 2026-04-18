let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
const m = 3;
const n = 3;

function mergeFunc(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i]; // записываем на место нулей
    }
    // Сортируем сам nums1
    nums1.sort((a, b) => a - b);
}
mergeFunc([1,2,3,0,0,0], 3, [2, 5, 6], 3);