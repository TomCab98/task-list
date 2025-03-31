import { AbstractControl, ValidationErrors } from '@angular/forms';

export class LoginValidator {
  static passwordStrength(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const hasMinLength = value.length >= 8;

    if (!hasMinLength) {
      return { passwordStrength: true };
    }
    return null;
  }
}
