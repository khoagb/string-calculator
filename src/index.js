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
     */
    Add(numbers: string): number {
        const nums = StringCalculator.GetNumbersFromString(numbers);
        StringCalculator.CheckNegatives(nums);
        return nums.reduce((sum, num) => sum + (num > 1000 ? 0 : num), 0);
    }

    /**
     * Parse numbers from string.
     *
     * @param numbers
     * @returns {Array}
     */
    static GetNumbersFromString(numbers: string): Array<number> {
        const results = [];
        if (numbers) {
            try {
                let delimiter = StringCalculator.GetDelimiter(numbers);
                const parts = numbers.split(new RegExp('(' + delimiter + '|\n)'));
                parts.forEach(num => results.push(parseInt(num) || 0));
            } catch (err) {
                // error string
            }
        }

        return results;
    }

    /**
     * Get delimiter from first line (optional)
     *
     * @param input
     * @returns {Array|{index: number, input: string}}
     */
    static GetDelimiter(input: string): string {
        let delimiter = input.match(/^\/\/.+\n/);

        if (delimiter) {
            delimiter = delimiter[0].substr(2, delimiter[0].lastIndexOf('\n') - 2);

            delimiter = delimiter
                .replace(/^\[/, '')
                .replace(/\]$/, '')
                .split('][')
                .reduce((res, deli) => res + '|' + deli.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), '');
        }

        // fallback to default delimiter `,`
        if (!delimiter) {
            delimiter = DEFAULT_DELIMITER;
        }

        return delimiter;
    }

    /**
     * Throw Exception if the numbers is negative.
     *
     * @param numbers
     */
    static CheckNegatives(numbers: Array<number>) {
        const errs = [];
        numbers.forEach(num => num >= 0 || errs.push(num));
        if (errs.length) {
            throw new Error(`Negatives not allowed (${errs.join(',')})`);
        }
    }
}