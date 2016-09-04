/** @jsx React.DOM */
var app = app || {};
app.components = app.components || {};

(function() {
    'use strict';

    var TodoApp = app.components.TodoApp = React.createClass({
        render: function () {
            return React.DOM.span(null, "Interesting text goes here too..");
        }
    });

    app.init = function() {
        var TodoApp = app.components.TodoApp;
        ReactDOM.render(React.createElement(TodoApp, null ), document.getElementById("app"));
    };

    app.init();

})();