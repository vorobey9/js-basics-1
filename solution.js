function squaresOfMax(a, b, c) {
  // Write a function that takes three numbers and returns
  // sum of squares of two largest
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        if ((a <= b) && (a <= c))
            return (b * b + c * c);
        if ((b <= a) && (b <= c))
            return (a * a + c * c);
        if ((c <= a) && (c <= b))
            return (a * a + b * b);
    }
}

function drawTriangle() {
  // Write a loop that makes seven calls to console.log to output the following triangle:
  //
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
    var symbol = "#";
    var i = 0;
    while (i < 7) {
        console.log(symbol);
        symbol = symbol + "#";
        i++;
    }
}

function fizzBuzz() {
  // Write a program that uses console.log to print all the numbers from 1 to 100,
  // with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
  // and for numbers divisible by 5 (and not 3), print "Buzz" instead.
  //
  // When you have that working, modify your program to print "FizzBuzz",
  // for numbers that are divisible by both 3 and 5 (and still print "Fizz"
  // or "Buzz" for numbers divisible by only one of those).
    for (var i = 1; i <= 100; i++) {
        if(i%3 == 0 && i%5 == 0 ) {
            console.log("FizzBuzz");
        } else 
            if(i%3 == 0) {
            console.log("Fizz");
        } else 
            if(i%5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

function chessBoard(size) {
  // Write a program that returns a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the
  // grid there is either a space or a “#” character. The characters
  // should form a chess board.
  //
  // Passing this string to console.log should show something like this:
  //
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //
  // When you have a program that generates this pattern,
  // define a variable size = 8 and change the program so that
  // it works for any size, outputting a grid of the given width and height.
    var i = 1;
    var j = 1;
    var line = "";
    var result = "";
    for ( ; i <= size; i++) {
        for ( ; j <= size; j++) {
            if(j%2 == 0)
                line = line + "#";
            else
                line = line + " ";
        }
        if(i!=size) {
            result += line + '\n';
        } else {
            result += line;
        }
        if(i%2 == 0)
            j = 2;
        else
            j = 1;
        line = "";
    }
    return result;
}

module.exports.squaresOfMax = squaresOfMax;
module.exports.drawTriangle = drawTriangle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.chessBoard = chessBoard;
