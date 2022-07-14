let {test} = require("../pages/api/t")

let assert = require("assert");
describe("unit test",function(){
  it("should return correct",function(){
    assert.equal(2+2,test());
  })
})