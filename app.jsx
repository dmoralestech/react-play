/** @jsx React.DOM */

var app = app || {};

(function() {
    'use strict';

    var TodoApp2 = app.components.TodoApp = React.createClass({
        render: function () {
            return (
                <div>
                    <p>Hello world</p>
                    <TodoApp3 />
                    <TodoApp4 />
                </div>
            );
        }
    });

    var TodoApp3 = app.components.TodoApp = React.createClass({
        render: function () {
            return (
                <div>
                    <p>Hello world 2</p>
                </div>
            );
        }
    });

    var TodoApp4 = app.components.TodoApp = React.createClass({
        render: function () {
            return (
                <div>
                    <p>Hello world 4</p>
                </div>
            );
        }
    });
    
    app.init = function() {
        var TodoApp = TodoApp2;
        React.renderComponent(
            <TodoApp2 />,
            document.getElementById('app')
        );
    };

    app.init();
})();