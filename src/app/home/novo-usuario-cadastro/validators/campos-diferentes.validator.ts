import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export function controlValuesDifferent(controlNameA: string, controlNameB: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup
    const valueOfControlA = formGroup.get(controlNameA)?.value
    const valueOfControlB = formGroup.get(controlNameB)?.value

    if (valueOfControlA != valueOfControlB) {
      return null
    } else {
      return { matchValues: true }
    }
  }
}
