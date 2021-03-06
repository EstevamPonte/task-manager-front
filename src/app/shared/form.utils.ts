import { FormGroup } from '@angular/forms'

export class FormUtils {
  public constructor( private form: FormGroup){

  }

  public fieldClassForErrorOrSeccess(fieldName: string){
    return{
      "is-invalid": this.showFieldError(fieldName),
      "is-valid": this.getField(fieldName).valid
    }
  }

  public showFieldError(fieldName: string): boolean {
    let field = this.getField(fieldName)
    return field.invalid && (field.touched || field.dirty)
  }

  public getField(fieldName: string){
    return this.form.get(fieldName)
  }
  
}