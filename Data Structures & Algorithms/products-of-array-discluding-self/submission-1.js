class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(numbers) {
        const totalProduct = numbers.reduce(
            (acc, curr) => (curr !== 0 ? acc * curr : acc),
            1,
        );
        const zeros = numbers.filter((item) => item === 0);
        const result = new Array(numbers.length).fill(0);
        if (zeros.length === 1) {
            return result.map((_, index) => (numbers[index] === 0 ? totalProduct : 0));
        } else if (zeros.length > 1) {
            return result;
        }
        return result.map((_, index) => totalProduct / numbers[index]);
    }
}
