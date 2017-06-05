// @flow

const DEFAULT_DELIMITER = ',';

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
        StringCalculator.CheckNegatives(nums);
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
                let delimiter = numbers.match(/^\/\/.+\n/);

                if (delimiter) {
                    delimiter = delimiter[0].charAt(2) || DEFAULT_DELIMITER;
                } else {
                    delimiter = DEFAULT_DELIMITER;
                }

                const parts = numbers.split(new RegExp('[' + delimiter + '\n]'));
                parts.forEach(num => results.push(parseInt(num) || 0));
            } catch (err) {
                // error string
            }
        }

        return results;
    }

    static CheckNegatives(numbers: Array<number>) {
        const errs = [];
        numbers.forEach(num => num >= 0 || errs.push(num));
        if (errs.length) {
            throw new Error(`Negatives not allowed (${errs.join(',')})`);
        }
    }
}