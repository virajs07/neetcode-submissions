class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        // Step 1: Frequency map
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // Step 2: Group elements by frequency in buckets
        for (const [num, freq] of map.entries()) {
            buckets[freq].push(num);
        }

        // Step 3: Iterate backwards from max frequency to gather top k
        const result = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
        }
        return result.slice(0, k);
    }
}
