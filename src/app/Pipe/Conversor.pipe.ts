import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'Conversor'
})

export class ConversorPipe implements PipeTransform{
    transform(value: any, por: any) {
        let value_one = parseInt(value);
        let value_two = parseInt(por);

        let result = "La multiplicación es: "+value_one+"x"+value_two+"="+(value_one*value_two);
        return result
    }
}