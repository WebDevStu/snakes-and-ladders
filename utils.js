module.exports = {

    /**
     * rolls the dice, returns random number
     * @returns {number}
     */
    rollDice: function () {
        return Math.ceil(Math.random() * 6);
    },


    /**
     * extends object with another props
     * @param object {object}
     * @param extend {object}
     * @returns {object}
     */
    extend: function (object, extend) {

        var prop;

        for (prop in extend) {
            if (extend.hasOwnProperty(prop)) {
                object[prop] = object[prop] || extend[prop];
            }
        }

        return object;
    },


    /**
     * nice wrapper for set interval to keep scope in callback method
     * @param callback {function}
     * @param scope {object}
     * @param timeout {number}
     * @returns {number}
     */
    repeat: function (callback, scope, timeout) {

        if (callback && typeof callback !== 'function') {
            throw new Error('repeat callback method is not a function');
        }

        return setInterval(function () {
            callback.call(scope);
        }, timeout);
    }
};