/** @jsx React.DOM */


var app = app || {};

(function() {
    'use strict';

    app.retrieveData = function() {
        return app.FIXTURES;
    };

    app.init = function() {
        var TodoApp = app.components.TodoApp;
        React.renderComponent(
            <TodoApp />,
            document.getElementById('app')
        );
    };

    app.init();
})();


//////
// var app = app || {};
//
// app.components = app.components || {};
//
// (function() {
//     'use strict';
//
//     var TodoApp = app.components.TodoApp = React.createClass({
//         render: function () {
//
//             // return React.DOM.span(null, "Interesting text goes here too..");
//
//             return (
//                 <div>
//                     <p>Hello world</p>
//                 </div>
//             );
//         }
//     });
//
//     app.init = function() {
//         var TodoApp = app.components.TodoApp;
//         ReactDOM.render(React.createElement(TodoApp, {} ), document.getElementById("app"));
//     };
//
//     app.init();
//
// })();