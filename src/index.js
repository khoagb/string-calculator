// @flow

/**
 * Simple String Calculator.
 */
export default class StringCalculator {

    /**
     * Calculate sum of numbers.
     *
     * @param numbers
     * @returns {*}
     * @constructor
     */
    Add(numbers: string): number {
        const nums = StringCalculator.GetNumbersFromString(numbers);
        return nums.reduce((a, b) => a + b, 0);
    }

    /**
     * Parse numbers from string.
     *
     * @param numbers
     * @returns {Array}
     * @constructor
     */
    static GetNumbersFromString(numbers: string): Array<number> {
        const results = [];
        if (numbers) {
            try {
                const parts = numbers.split(',');
                parts.forEach(num => results.push(parseInt(num) || 0));
            } catch (err) {
                // error string
            }
        }

        return results;
    }
}