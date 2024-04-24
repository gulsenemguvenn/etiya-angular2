import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlErrorMessage',
  standalone: true
})
export class ControlErrorMessagePipe implements PipeTransform {

  transform(value: ValidationErrors | undefined | null, ...args: any[]): unknown {
    if(value?.["required"]){
      return 'This field is required';
    }
    if(value?.["minlength"]){
      return 'Minimum 3 characters';
    }
    if(value?.["maxlength"]){
      return 'Maximum 20 characters';
    }
    if (value?.["customError"]) {
      return 'Bir hata meydana geldi.';
    }
    if (value?.["pattern"]) {
      return 'Geçersiz formatta.';
    }


    return 'This field is invalid';
  }


}
