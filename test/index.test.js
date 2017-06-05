import { describe, it } from 'mocha';
import { expect } from 'chai';
import StringCalculator from '../src';

describe('String Calculator', () => {
    describe('Task 1', () => {
        const calculator = new StringCalculator();

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

    });
});