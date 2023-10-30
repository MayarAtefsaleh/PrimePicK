//cross-field custom validator  34an llmatch password

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatch: ValidatorFn =(control: AbstractControl):ValidationErrors | null => {
  // return (control: AbstractControl): ValidationErrors | null =>

    let passControl = control.get('Password');
    let confirmPassControl = control.get('ConfirmPassword');
    if (!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
return null;
     let validationError={'UnMatchPassword':{'pass':passControl?.value,'confirm':confirmPassControl?.value}}
    return (passControl?.value == confirmPassControl?.value) ? null : validationError;


}
