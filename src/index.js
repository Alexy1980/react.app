// подключаем jquery
var $ = require('jquery');
// подключаем constant.js
var str = require('./constant');

var App = function(){
    console.log(str);
    $('body').html(str);
};

new App();