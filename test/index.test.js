import { describe, it } from 'mocha';
import { expect } from 'chai';
import StringCalculator from '../src';

describe('String Calculator', () => {
    const calculator = new StringCalculator();

    describe('Task 1', () => {
        it('should be 0 for empty string', () => {
            expect(calculator.Add('')).to.equal(0);
        });

        it('should be same as the input', () => {
            expect(calculator.Add('1')).to.equal(1);
        });

        it('should be the sum of two number', () => {
            expect(calculator.Add('1,2')).to.equal(3);
        });
    });

    describe('Task 2', function () {
        it('should handle an unknown amount of numbers', () => {
            expect(calculator.Add('1,2,3,4,5')).to.equal(15);
        });
    });

    describe('Task 3', () => {
        it('should handle new lines between numbers (instead of commas)', () => {
            expect(calculator.Add('1\n2,3\n4,5')).to.equal(15);
            expect(calculator.Add('1,\n')).to.equal(1);
        });

        it('should support different delimiters', () => {
            expect(calculator.Add('//;\n1;2\n3;4;5')).to.equal(15);
        });
    });

    describe('Task 4', () => {
        it('should throw an exception if pass the negative numbers', () => {
            expect(() => calculator.Add('-1,-2,-3,4,5')).to.throw(Error, /^(Negatives not allowed)/)
        });
    });
});