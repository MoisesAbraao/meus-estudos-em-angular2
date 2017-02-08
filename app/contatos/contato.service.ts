import { Injectable } from '@angular/core';

import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

Injectable()

export class ContatoService{

 
    getContatos(): Promise<Contato[]>{
        return Promise.resolve(CONTATOS);
    }

    //retorna contato
    getContato(id: number): Promise<Contato>{
        return this.getContatos()
                .then((contatos: Contato[]) => {
                    return contatos.find(contato => contato.id === id);
                    });
    }

    getContatosSlowly(): Promise<Contato[]>{
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        })
        .then(() => {
            console.log("Primeiro then");
            return 'angular';
        })
        .then((param: string) => {
            console.log("Segundo then");
            console.log(param);

            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log("Continuando depois de 4 segundos!");
                    resolve2();
                }, 4000);
            });
        })
        .then(() => {
            console.log("Terceiro then");
            return this.getContatos();
        }); 
        
    }

}