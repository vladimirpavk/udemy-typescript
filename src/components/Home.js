System.register(["react"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var React, Home;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            Home = /** @class */ (function (_super) {
                __extends(Home, _super);
                function Home() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Home.prototype.render = function () {
                    return (React.createElement("div", null,
                        "Hello there, ",
                        this.props.name,
                        ", you are ",
                        this.props.age,
                        ", right ?"));
                };
                return Home;
            }(React.Component));
            exports_1("Home", Home);
        }
    };
});
//# sourceMappingURL=Home.js.map