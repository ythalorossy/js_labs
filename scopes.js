/*
var y = (function () {
    'use strict';
    
    return function YQuery(id) {
        // Este elemento é acessível apenas dentro desta função
        var elem = document.getElementById(id);
        
        //console.log(elem);
        
        // Retorna as funcionalidade
        return {
            setText : function (text) {
                elem.innerText = text;
                return new YQuery(this);
            },
            getText : function () {
                return elem.innerText;
            }
        };
    };
    
}());
*/


(function (global, factory) {
    'use strict';
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
        };
    } else {
        factory(global);
    }

    // Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

    console.log(window, noGlobal);
}));