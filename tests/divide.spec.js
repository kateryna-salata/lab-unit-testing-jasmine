
describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined.", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(100, 4)).toEqual(25);
            expect(divide(18, 9)).toEqual(2);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(7)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 6)).toEqual(undefined);
        });

    });  
})