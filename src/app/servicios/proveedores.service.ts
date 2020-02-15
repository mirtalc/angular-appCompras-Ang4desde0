import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProveedoresService {
    // Atributs
    proveedores: any[] = [
        {
            nom: 'Telefónica',
            cif: 'B12345678',
            direccio: 'C/ chema el hacker, 100',
            email: 'telefonica@test.com',
            telefon: 91500600
        },
        {
            nom: 'Consum',
            cif: 'X22446688',
            direccio: 'C/ death to red John, 23',
            email: 'consum@perexemple.com',
            telefon: 91588677
        }
    ];

    constructor() { }

    getProveedores() {
        return this.proveedores;
    }
}
