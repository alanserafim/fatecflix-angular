import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export function controlValuesAreEqual(controlNameA: string, controlNameB: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup
    const valueOfControlA = formGroup.get(controlNameA)?.value
    const valueOfControlB = formGroup.get(controlNameB)?.value

    if (valueOfControlA === valueOfControlB) {
      return null
    } else {
      return { valuesDoNotMatch: true }
    }
  }
}
