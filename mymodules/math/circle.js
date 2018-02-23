System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function calculateObim(precnik) {
        return precnik * PI;
    }
    exports_1("default", calculateObim);
    var PI;
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
        }
    };
});
//# sourceMappingURL=circle.js.map