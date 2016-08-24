/**
**1.js的测试用例文件
**/
var expect = chai.expect;
describe("A suite of basic functions", function() {
    it("reverse word",function(){
        expect("BBB").equal(reverse("AAA"));
		expect("DCBA").equal(reverse("ABCD"));
    });
});


describe("测试求和函数",function(){
	it("求和",function(){
		expect(2).equal(add(1,1));
		expect(4).equal(add(2,2));
	});
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect(-1).equal([1,2,3].indexOf(0));
    });
  });
});
