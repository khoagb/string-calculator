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
                results.push(parseInt(parts[0]) || 0);
                results.push(parseInt(parts[1]) || 0);
            } catch (err) {
                // error string
            }
        }

        return results;
    }
}