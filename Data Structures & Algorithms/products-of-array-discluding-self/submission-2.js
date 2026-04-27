class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(numbers) {
        const length = numbers.length;
        const result = new Array(length).fill(1);

        for (let i = 1; i < length; i++) {
            result[i] = numbers[i - 1] * result[i - 1];
        }

        let rightProduct = 1;
        for (let i = length - 1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct *= numbers[i];
        }

        for (let i = 0; i < length; i++) {
            if (result[i] === -0) {
                result[i] = 0;
            }
        }
        return result;
    }
}
