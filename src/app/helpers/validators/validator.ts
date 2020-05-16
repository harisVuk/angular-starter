import { AbstractControl, ValidatorFn } from '@angular/forms';

export class ValidatorsPatern {

     static vaildEmail(): ValidatorFn {

        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if ((isNaN(c.value)  && !reg.test(c.value))) {
                return { 'emailValid': true };
            }
            return null;
        };

    }

}
