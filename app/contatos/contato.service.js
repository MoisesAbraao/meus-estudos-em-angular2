"use strict";
var core_1 = require("@angular/core");
var contatos_mock_1 = require("./contatos-mock");
core_1.Injectable();
var ContatoService = (function () {
    function ContatoService() {
    }
    ContatoService.prototype.getContatos = function () {
        return contatos_mock_1.CONTATOS;
    };
    return ContatoService;
}());
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map