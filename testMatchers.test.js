import { toHaveTheSameElements } from './testMatchers.js';

expect.extend({
    toHaveTheSameElements,
})

describe('Testing matchers: toHaveTheSameEements', () => {
    it('Should pass if arrays have the same elements in the same order', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];
        expect(arr1).toHaveTheSameElements(arr2);
    })
    it('Should pass if arrays have the same elements in different order', () => {
        const arr1 = [3, 1, 2];
        const arr2 = [1, 2, 3];
        expect(arr1).toHaveTheSameElements(arr2);
    })
    it('Should fail if arrays have the the same number of elements, but different elements', () => {
        const arr1 = [3, 1, 4];
        const arr2 = [1, 2, 3];
        expect(arr1).not.toHaveTheSameElements(arr2);
    })
    it('Should fail if arrays have different number of elements', () => {
        const arr1 = [3, 1, 2, 2];
        const arr2 = [1, 2, 3];
        expect(arr1).not.toHaveTheSameElements(arr2);
    })
    it('Should fail if arrays have the same number of elements, but elements repete different number of times', () => {
        const arr1 = [3, 1, 2, 2];
        const arr2 = [1, 2, 3, 3];
        expect(arr1).not.toHaveTheSameElements(arr2);
    })
    it('Should fail if an element is of a different type', () => {
        const arr1 = [3, 1, 2, 2];
        const arr2 = [1, 2, '2', 3];
        expect(arr1).not.toHaveTheSameElements(arr2);
    })

})