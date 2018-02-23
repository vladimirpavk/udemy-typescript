System.register(["react", "react-dom", "./components/Home"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, ReactDOM, Home_1;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (Home_1_1) {
                Home_1 = Home_1_1;
            }
        ],
        execute: function () {
            ReactDOM.render(React.createElement(Home_1.default, { name: "Vladimir", age: 41 }), document.getElementById("app"));
        }
    };
});
//# sourceMappingURL=index.js.map