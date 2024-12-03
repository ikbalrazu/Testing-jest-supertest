const { Add } = require("../controller");

describe("numbers",()=>{
    test('sum numbers',()=>{
        expect(Add(10,20)).not.toEqual(20);
    })
    
    test("4 plus 4 equal 8",()=>{
        let a = 4;
        let b = 4;
        expect(a+b).toBe(8);
    })
})