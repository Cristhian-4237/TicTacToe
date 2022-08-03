var tictactoeUtils = require('../src/TicTacToeUtils');
//comment1
//this commit is in order to test lineal changes
//this is the feature/setupPlayersUnitTests branch
var test = 1;
var assert = require('assert');
describe("the function", function () {
  it("works", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var board = ticTacToeUtils.buildBoard(2);
    var expectedBoard = {
        board: [
            [
            null,
            null
            ],
            [
            null,
            null
            ]
        ],
        empty: [
            '0 0',
            '0 1',
            '1 0',
            '1 1'
        ]
        };
    assert.notEqual(board, expectedBoard);

  });
});

var assert = require('assert');
describe("compare tictactoe board size", function () {
  it("works", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var board = ticTacToeUtils.buildBoard(2);
        var expectedBoardSize = 2;
        let currentBoardSize = board.board.length;
    assert.equal(expectedBoardSize, currentBoardSize);
  });
});

