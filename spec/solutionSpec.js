var squaresOfMax = require('../solution').squaresOfMax,
  drawTriangle = require('../solution').drawTriangle;
  fizzBuzz = require('../solution').fizzBuzz;
  chessBoard = require('../solution').chessBoard;

describe("solution", function() {
  describe("squaresOfMax", function() {
    describe("all permutations", function() {
      it("(1, 2, 3)", function() {
        expect(squaresOfMax(1, 2, 3)).toEqual(13);
      });

      it("(1, 3, 2)", function() {
        expect(squaresOfMax(1, 3, 2)).toEqual(13);
      });

      it("(2, 1, 3)", function() {
        expect(squaresOfMax(2, 1, 3)).toEqual(13);
      });

      it("(2, 3, 1)", function() {
        expect(squaresOfMax(2, 3, 1)).toEqual(13);
      });

      it("(3, 2, 1)", function() {
        expect(squaresOfMax(3, 2, 1)).toEqual(13);
      });

      it("(3, 1, 2)", function() {
        expect(squaresOfMax(3, 1, 2)).toEqual(13);
      });
    });

    describe("same numbers", function() {
      it("(1, 1, 3)", function() {
        expect(squaresOfMax(1, 1, 3)).toEqual(10);
      });

      it("(1, 3, 3)", function() {
        expect(squaresOfMax(1, 3, 3)).toEqual(18);
      });

      it("(1, 1, 1)", function() {
        expect(squaresOfMax(1, 1, 1)).toEqual(2);
      });
    });


    describe("negative numbers", function() {
      it("(-1, -2, -3)", function() {
        expect(squaresOfMax(-1, -2, -3)).toEqual(5);
      });

      it("(-1, -1, -3)", function() {
        expect(squaresOfMax(-1, -1, -3)).toEqual(2);
      });

      it("(-1, -2, 3)", function() {
        expect(squaresOfMax(-1, -2, 3)).toEqual(10);
      });
    });
  });

  describe("drawTriangle", function() {
    beforeEach(function() {
      spyOn(console, 'log');
    });

    it("actually draws triangle", function() {
      var triangle = [
        ['#'],
        ['##'],
        ['###'],
        ['####'],
        ['#####'],
        ['######'],
        ['#######']
      ];

      drawTriangle();

      expect(console.log.calls.allArgs()).toEqual(triangle);
    });
  });

  describe('fizzBuzz', function() {
    beforeEach(function() {
      spyOn(console, 'log');
    });

    it("solves fizz buzz", function() {
      var fizzBuzzOutput = [
        [ 1 ],  [ 2 ],  [ 'Fizz' ],  [ 4 ],  [ 'Buzz' ],
        [ 'Fizz' ],  [ 7 ],  [ 8 ],  [ 'Fizz' ],  [ 'Buzz' ],
        [ 11 ],  [ 'Fizz' ],  [ 13 ],  [ 14 ],  [ 'FizzBuzz' ],
        [ 16 ],  [ 17 ],  [ 'Fizz' ],  [ 19 ],  [ 'Buzz' ],
        [ 'Fizz' ],  [ 22 ],  [ 23 ],  [ 'Fizz' ],  [ 'Buzz' ],
        [ 26 ],  [ 'Fizz' ],  [ 28 ],  [ 29 ],  [ 'FizzBuzz' ],
        [ 31 ],  [ 32 ],  [ 'Fizz' ],  [ 34 ],  [ 'Buzz' ],
        [ 'Fizz' ],  [ 37 ],  [ 38 ],  [ 'Fizz' ],  [ 'Buzz' ],
        [ 41 ],  [ 'Fizz' ],  [ 43 ],  [ 44 ],  [ 'FizzBuzz' ],
        [ 46 ],  [ 47 ],  [ 'Fizz' ],  [ 49 ],  [ 'Buzz' ],
        [ 'Fizz' ],  [ 52 ],  [ 53 ],  [ 'Fizz' ],  [ 'Buzz' ],
        [ 56 ],  [ 'Fizz' ],  [ 58 ],  [ 59 ],  [ 'FizzBuzz' ],
        [ 61 ],  [ 62 ],  [ 'Fizz' ],  [ 64 ],  [ 'Buzz' ],
        [ 'Fizz' ],  [ 67 ],  [ 68 ],  [ 'Fizz' ],  [ 'Buzz' ],
        [ 71 ],  [ 'Fizz' ],  [ 73 ],  [ 74 ],  [ 'FizzBuzz' ],
        [ 76 ],  [ 77 ],  [ 'Fizz' ],  [ 79 ],  [ 'Buzz' ],
        [ 'Fizz' ],  [ 82 ],  [ 83 ],  [ 'Fizz' ],  [ 'Buzz' ],
        [ 86 ],  [ 'Fizz' ],  [ 88 ],  [ 89 ],  [ 'FizzBuzz' ],
        [ 91 ],  [ 92 ],  [ 'Fizz' ],  [ 94 ],  [ 'Buzz' ],
        [ 'Fizz' ],  [ 97 ],  [ 98 ],  [ 'Fizz' ],  [ 'Buzz' ]
      ]

      fizzBuzz();

      expect(console.log.calls.allArgs()).toEqual(fizzBuzzOutput);
    });
  });

  describe('chessBoard', function() {
    it('0x0', function() {
      expect(chessBoard(0)).toEqual('');
    });

    it('1x1', function() {
      expect(chessBoard(1)).toEqual(' ');
    });

    it('4x4', function() {
      var _4x4 = [
        ' # #',
        '# # ',
        ' # #',
        '# # '
      ].join('\n');

      expect(chessBoard(4)).toEqual(_4x4);
    });

    it('8x8', function() {
      var _8x8 = [
        ' # # # #',
        '# # # # ',
        ' # # # #',
        '# # # # ',
        ' # # # #',
        '# # # # ',
        ' # # # #',
        '# # # # '
      ].join('\n');

      expect(chessBoard(8)).toEqual(_8x8);
    });
  });
});
