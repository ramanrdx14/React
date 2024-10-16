import { sum } from "../sum";

test("Sum function whould be calculated the sum of the two numbers",()=>{


    const result = sum(10,20);

    //Assertions
    expect(result).toBe(30);
})