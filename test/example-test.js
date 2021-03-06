var supertest = require("supertest");
var should = require("should");

require("../index");

var server = supertest.agent("http://localhost:3000");

describe("SAMPLE UNIT TEST", function() {
	it("should return home page", function(done) {
		server
			.get("/")
			.expect("Content-type", /text/)
			.expect(200)
			.end(function(err, res) {
				res.status.should.equal(200);
				
				var data = res.body.data;
				data.should.equal("ok");
				done();
			});
	});
	it("example", function(done) {
		var value = 1;
		value.should.equal(1);
		done();
	});
});