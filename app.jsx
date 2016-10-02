/** @jsx React.DOM */

var app = app || {};

(function() {
    'use strict';

    var TodoApp2 = app.components.TodoApp = React.createClass({
        render: function () {
            return (
                <div>
                    <p>value: {this.props.value}</p>
                    <TodoApp3 name="buy milk" />
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
                    <p>{this.props.name}</p>
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
            <TodoApp2 value="todo 1"/>,
            document.getElementById('app')
        );
    };

    app.init();
})();