import { AbstractControl, ValidationErrors } from '@angular/forms';

export class TaskValidator {
  static dateValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const now = new Date();

    now.setSeconds(0, 0);
    selectedDate.setSeconds(0, 0);

    if (selectedDate < now) {
      return { dateValidator: true };
    }
    return null;
  }
}
