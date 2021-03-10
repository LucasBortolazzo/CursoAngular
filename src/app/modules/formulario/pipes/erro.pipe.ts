import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'erro'
})
export class ErroPipe implements PipeTransform {

    transform(value: any): any {
        if (value) {
            if (value.required) {
                return 'Campo obrigatório.';
            } else if (value.email) {
                return 'E-mail inválido';
            } else if (value.minlength) {
                return 'Campo inválido. Preenchimento mínimo de ' + value.minlength.requiredLength + ' caracteres.';
            } else if (value.maxlength) {
                return 'Campo inválido. Preenchimento máximo de ' + value.maxlength.requiredLength + ' caracteres.';
            } else {
                const chaves = Object.keys(value);
                if (chaves.length > 0) {
                    return 'Campo inválido. Verifique a informação digitada.';
                } else {
                    return value[chaves[0]];
                }
            }
        }
        return null;
    }
}
