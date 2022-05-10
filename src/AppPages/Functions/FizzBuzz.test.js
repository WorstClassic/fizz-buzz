import FizzBuzz from "./FizzBuzz";

describe("FizzBuzz Fails Suite", () => {
    test("FizzBuzz gets a decimal", () => {
        const fizzbuzzTenPoint01 = FizzBuzz("..10");
        expect(fizzbuzzTenPoint01).toBe(null);
    });
    test("FizzBuzz gets decimal", () => {
        const fizzbuzzDecimal = FizzBuzz("decimal");
        expect(fizzbuzzDecimal).toBe(null);
    });
});

describe("FizzBuzz Cases", () => {
    describe("FizzBuzz returns empty string cases", () => {

        const dataSet = [-1, 1, 4, 7, 8, 11];

        it.each(dataSet)('%i returns empty fizzbuzz', input => {
            expect(FizzBuzz(input)).toBe('');
        });
    });
    describe("FizzBuzz returns fizz alone cases", () => {
        const dataSet = [-3, 3, 6, 9, 12, 18, 21];

        it.each(dataSet)('%i returns fizz fizzbuzz', input => {
            expect(FizzBuzz(input)).toBe('fizz');
        });
    });

    describe("FizzBuzz returns buzz alone cases", () => {
        const dataSet = [-5, 5, 10, 20, 25, 35, 40];

        it.each(dataSet)('%i returns buzz fizzbuzz', input => {
            expect(FizzBuzz(input)).toBe('buzz');
        });
    });

    describe("FizzBuzz returns fizzbuzz cases", () => {
        const dataSet = [-15, 0, 15, 30, 45, 60, 75, 90];

        it.each(dataSet)('%i returns fizzbuzz', input => {
            expect(FizzBuzz(input)).toBe('fizzbuzz');
        });
    });
});