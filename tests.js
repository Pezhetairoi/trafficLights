/**
 * Created by sijiehao on 31/03/2016.
 */
test( "assert S-N green light on then changed to red", function( assert ) {
    assert.expect( 2 );
    var done = assert.async( 2 );

    setTimeout(function() {
        var greenOn = document.getElementById('green1').style.background;
        assert.equal( greenOn, "rgb(5, 255, 13)" );
        done();
    }, 10100 );

    setTimeout(function() {
        var redOn = document.getElementById('red1').style.background;
        assert.equal( redOn, "rgb(255, 0, 0)" );
        done();
    }, 20100 );

});

test( "assert E-W red light on then changed to green", function( assert ) {
    assert.expect( 2 );
    var done = assert.async( 2 );

    setTimeout(function() {
        var redOn = document.getElementById('red2').style.background;
        assert.equal( redOn, "rgb(255, 0, 0)" );
        done();
    }, 10100 );

    setTimeout(function() {
        var greenOn = document.getElementById('green2').style.background;
        assert.equal( greenOn, "rgb(5, 255, 13)" );
        done();
    }, 20100 );

});

QUnit.module('module start', function() {
    var colour = function () {
        return "#FF0000";
    }

    test("specified colour exists in array", function () {
        var expectedValues = ["#FF0000", "#FFB300", "#05FF0D"];
        ok(expectedValues.indexOf(colour()) !== -1, 'colours() should return an expected value');
    });

    test("assert prompt message is hidden when page loaded", function(assert) {
        var msg = document.getElementById("log");
        assert.strictEqual(msg.innerHTML, "");
    });

    test("assert S-N red light is on when page loaded", function(assert) {
        var red1 = document.getElementById("red1").style.background;
        assert.equal(red1, 'rgb(255, 0, 0)');
    });

    test("assert S-N yellow light is off when page loaded", function(assert) {
        var yellow1 = document.getElementById("yellow1").style.background;
        assert.equal(yellow1, 'rgb(122, 92, 0)');
    });

    test("assert S-N green light is off when page loaded", function(assert) {
        var green1 = document.getElementById("green1").style.background;
        assert.equal(green1, 'rgb(0, 128, 12)');
    });

    test("assert E-W red light is off when page loaded", function(assert) {
        var red2 = document.getElementById("red2").style.background;
        assert.equal(red2, 'rgb(122, 0, 0)');
    });

    test("assert E-W yellow light is off when page loaded", function(assert) {
        var yellow2 = document.getElementById("yellow2").style.background;
        assert.equal(yellow2, 'rgb(122, 92, 0)');
    });

    test("assert E-W green light is on when page loaded", function(assert) {
        var green2 = document.getElementById("green2").style.background;
        assert.equal(green2, "rgb(5, 255, 13)");
    });

    test('assert E-W yellow light on after approx 8 secs', function(assert) {
        stop();
        setTimeout(function() {
            var yellowOn = document.getElementById("yellow2").style.background;
            assert.equal(yellowOn, 'rgb(255, 179, 0)');
            start();
        }, 8100)
    });

    test('assert S-N green light on after approx 10 secs', function(assert) {
        stop();
        setTimeout(function() {
            var greenOn = document.getElementById("green1").style.background;
            assert.equal(greenOn, 'rgb(5, 255, 13)');
            start();
        }, 10100)
    });

    test('assert E-W red light on after yellow light on for 2 secs', function(assert) {
        stop();
        setTimeout(function() {
            var redOn = document.getElementById("red2").style.background;
            assert.equal(redOn, 'rgb(255, 0, 0)');
            start();
        }, 10200)
    });
});




