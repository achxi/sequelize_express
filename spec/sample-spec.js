// var express = require('express');
// var app = express();
// var request = require('request');
var test_jasmine = {
	gimmeANumber : function() {
		return 10;
	}
};

// var test_jasmine = require('../test_jasmine.js'); //1 trong 2 cach

function Test_jasmine() {
	var num = 10;
};
Test_jasmine.prototype.gimmeANumber = function() {
	// return this.num;
	return this.nummmmmm;
};

Test_jasmine.prototype.showNumber = function() {
	return 'the number here is: ' + this.gimmeANumber();
	// return 'the number here is: (don\'t call gimmeANumber function)';
};

Test_jasmine.prototype.showNumberWithArgs = function(a) {
	return 'the number here is: ' + this.gimmeANumber() + ' and the args is: ' + a;
	// return 'the number here is: (don\'t call gimmeANumber function)';
};
/*var pub_jasmine = new Test_jasmine();*/ //constructor function

describe('describe thing goes here', function() {
	it('it thing goes here', function() {
		expect(1 + 2).toEqual(3);
	});
});

// it('testing things', function(done) {
// 	request('http://localhost:3000/hello', function(err, res, body) {
// 		expect(body).toEqual('hello world');
// 		done();
// 	});
// });

describe('Hello world', function() {

  beforeEach(function() {
    this.addMatchers({
      toBeDivisibleByTwo: function() {
        return (this.actual % 2) === 0;
      }
    });
  }); //this.actual instead of just this -- you're usually referring to the content of the object, not the instance of the object.

  it('is divisible by 2', function() {
    expect(test_jasmine.gimmeANumber()).toBeDivisibleByTwo();
  });
/*  it('constructor function devisible by 2', function() {
	var pub_jasmine = new Test_jasmine(); //constructor function
	expect(test_jasmine.gimmeANumber()).toBeDivisibleByTwo();
  });*/

  it('spyOn method', function() {
    var testJ = new Test_jasmine();
    spyOn(testJ, "gimmeANumber"); //spyOn method, spyOn thang nao thi expect thang do !IMPORTANT
    testJ.showNumberWithArgs('achxi');
    expect(testJ.gimmeANumber).toHaveBeenCalled();
  });

   it('spyOn method', function() {
    var testJ = new Test_jasmine();

    // spyOn(testJ, "showNumberWithArgs"); //spyOn method
    // testJ.showNumberWithArgs('achxi');
    // expect(testJ.showNumberWithArgs).toHaveBeenCalledWith('achxis');
    // expect(testJ.showNumberWithArgs).not.toHaveBeenCalledWith('achxi');
    
    // testJ.gimmeANumber = jasmine.createSpy('showNumber spy'); //don't care whether function run properly, just care whether that function has been called
    // spyOn(testJ, 'gimmeANumber'); // need to check around more
    // testJ.gimmeANumber = jasmine.createSpy('showNumber spy').andReturn('yolo');
    testJ.gimmeANumber = jasmine.createSpy('showNumber spy').andCallFake(function() {
															    console.log("Time to say hello!");
															    return "bonjour";
															});
    testJ.showNumberWithArgs('achxi');
    expect(testJ.gimmeANumber).toHaveBeenCalled();
  }); 

 it("The 'toBeDefined' matcher compares against `undefined`", function() {
    var a = {
      foo: "foo"
    };

    expect(a.foo).toBeDefined();
    expect(a.bar).toBeDefined();
    expect(a.foo).toBeUndefined();
    expect(a.bar).toBeUndefined();
  });

});