require.def(function (require, exports, module) {
    //This is a fakeout require("fake1");

    var red = require("red"),
        blue = require('blue');

    /*
     And another fakeoute require("fake2");
    */

    //Use ugly exports
    exports.name = red.name + blue.name;
});
