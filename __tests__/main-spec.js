const isStartSmallerThanEnd = require('../main')[0];
const isInRangeOf1to1000 = require('../main')[1];
const createMultiplyEquation = require('../main')[2];
const createMultiplicationTable = require('../main')[3];
const getMultiplicationTable = require('../main')[4];

it('should return true when start is smaller than end', () => {
    expect(isStartSmallerThanEnd(99, 100)).toBe(true);
});

it('should return false when start is bigger than end', () => {
    expect(isStartSmallerThanEnd(100, 99)).toBe(false);
});

it('should return true when start is equal to end', () => {
    expect(isStartSmallerThanEnd(99, 99)).toBe(true);
});

it('should return true when start and end are in range', () => {
    expect(isInRangeOf1to1000(99, 99)).toBe(true);
});

it('should return false when start in range and end is smaller than lower bound', () => {
    expect(isInRangeOf1to1000(99, 0)).toBe(false);
});

it('should return false when start in range and end is bigger than upper bound', () => {
    expect(isInRangeOf1to1000(99, 10000)).toBe(false);
});

it('should return true when start in range and end is equal to upper bound', () => {
    expect(isInRangeOf1to1000(99, 1000)).toBe(true);
});

it('should return true when start in range and end is equal to lower bound', () => {
    expect(isInRangeOf1to1000(99, 1)).toBe(true);
});

it('should return false when start is smaller than lower bound and end is in range', () => {
    expect(isInRangeOf1to1000(0, 99)).toBe(false);
});

it('should return false when start is smaller than lower bound and end is smaller than lower bound', () => {
    expect(isInRangeOf1to1000(0, 0)).toBe(false);
});

it('should return false when start is smaller than lower bound and end is bigger than upper bound', () => {
    expect(isInRangeOf1to1000(0, 1000)).toBe(false);
});

it('should return false when start is smaller than lower bound and end is equal to upper bound', () => {
    expect(isInRangeOf1to1000(0, 10000)).toBe(false);
});

it('should return false when start is smaller than lower bound and end is equal to lower bound', () => {
    expect(isInRangeOf1to1000(0, 1)).toBe(false);
});

it('should return false when start is bigger than upper bound and end is bigger than upper bound', () => {
    expect(isInRangeOf1to1000(10000, 10000)).toBe(false);
});

it('should return false when start is bigger than upper bound and end is smaller than lower bound', () => {
    expect(isInRangeOf1to1000(10000, 1)).toBe(false);
});

it('should return false when start is bigger than upper bound and end is equal to lower bound', () => {
    expect(isInRangeOf1to1000(10000, 1)).toBe(false);
});

it('should return false when start is bigger than upper bound and end is equal to upper bound', () => {
    expect(isInRangeOf1to1000(10000, 1000)).toBe(false);
});

it('should return false when start is bigger than upper bound and end is in range', () => {
    expect(isInRangeOf1to1000(10000, 99)).toBe(false);
});

it('should return false when start is equal to lower bound and end is bigger than upper bound', () => {
    expect(isInRangeOf1to1000(1, 10000)).toBe(false);
});

it('should return false when start is equal to lower bound and end is smaller than lower bound', () => {
    expect(isInRangeOf1to1000(1, 0)).toBe(false);
});

it('should return true when start is equal to lower bound and end is equal to lower bound', () => {
    expect(isInRangeOf1to1000(1, 1)).toBe(true);
});

it('should return true when start is equal to lower bound and end is equal to upper bound', () => {
    expect(isInRangeOf1to1000(1, 1000)).toBe(true);
});

it('should return true when start is equal to lower bound and end is in range', () => {
    expect(isInRangeOf1to1000(1, 99)).toBe(true);
});

it('should return false when start is equal to upper bound and end is bigger than upper bound', () => {
    expect(isInRangeOf1to1000(1000, 10000)).toBe(false);
});

it('should return false when start is equal to upper bound and end is smaller than lower bound', () => {
    expect(isInRangeOf1to1000(1000, 0)).toBe(false);
});

it('should return true when start is equal to upper bound and end is equal to lower bound', () => {
    expect(isInRangeOf1to1000(1000, 1)).toBe(true);
});

it('should return true when start is equal to upper bound and end is equal to upper bound', () => {
    expect(isInRangeOf1to1000(1000, 1000)).toBe(true);
});

it('should return true when start is equal to upper bound and end is in range', () => {
    expect(isInRangeOf1to1000(1000, 99)).toBe(true);
});

it('should return 3*5=15 when x is 3 and y is 5', () => {
    expect(createMultiplyEquation(3, 5)).toBe("3*5=15");
});

it('should return a 2x2-to-4x4 table when start is 2 and end is 4', () => {
    expect(createMultiplicationTable(2, 4)).toBe("2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16");
});

it('should return a 2x2-to-4x4 table when start is 2 and end is 4', () => {
    expect(getMultiplicationTable(2, 4)).toBe("2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16");
});

it('should return null when start is bigger than end', () => {
    expect(getMultiplicationTable(6, 4)).toBe(null);
});