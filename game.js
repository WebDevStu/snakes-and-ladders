var _ = require('./utils'),

    /**
     * Game
     * @constructor
     */
    Game = function () {

        this.game       = false;
        this.position   = 1;
        this.interval   = null;
    };


// extend prototype
_.extend(Game.prototype, {


    /**
     * start game
     */
    start: function () {

        this.game = true;
        this.interval = _.repeat(this.move, this, 1000);
    },


    /**
     * each move the player makes
     */
    move: function () {

        var thrown = _.rollDice(),
            logger = thrown + ' - ';

        this.position += thrown;

        // over 100 remove the thrown
        if (this.position > 100) {
            console.log(logger + 'over shoot!');
            this.position -= thrown;
            return;
        }

        // at 100 - game complete
        if (this.position === 100) {
            this.complete(thrown);
        }

        // divisible by 9
        if (this.position % 9 === 0) {

            this.position -= 3;
            this.position = Math.max(this.position, 0);

            logger += 'snake - ';
        }

        // divisible by 25
        if (this.position === 25 || this.position === 55) {

            this.position += 10;
            logger += 'ladder - '
        }

        // log out message
        if (this.game) {
            console.log(logger + this.position);
        }
    },


    /**
     * game complete
     */
    complete: function (finalThrow) {

        this.game = false;

        clearInterval(this.interval);

        console.log(finalThrow + ' - 100');
        console.log('Game complete');
    }
});


// init game
var snakesAndLadders = new Game();

snakesAndLadders.start();

// you could play two games against each other to see who wins!!!