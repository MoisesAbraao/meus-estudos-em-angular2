"use strict";
var core_1 = require("@angular/core");
var contatos_mock_1 = require("./contatos-mock");
core_1.Injectable();
var ContatoService = (function () {
    function ContatoService() {
    }
    ContatoService.prototype.getContatos = function () {
        return Promise.resolve(contatos_mock_1.CONTATOS);
    };
    //retorna contato
    ContatoService.prototype.getContato = function (id) {
        return this.getContatos()
            .then(function (contatos) {
            return contatos.find(function (contato) { return contato.id === id; });
        });
    };
    ContatoService.prototype.getContatosSlowly = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 3000);
        })
            .then(function () {
            console.log("Primeiro then");
            return 'angular';
        })
            .then(function (param) {
            console.log("Segundo then");
            console.log(param);
            return new Promise(function (resolve2, reject2) {
                setTimeout(function () {
                    console.log("Continuando depois de 4 segundos!");
                    resolve2();
                }, 4000);
            });
        })
            .then(function () {
            console.log("Terceiro then");
            return _this.getContatos();
        });
    };
    return ContatoService;
}());
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map