import { FormControl } from "@angular/forms";

export class MyEmailValidator {

  static isValidEmail(inputBox: FormControl) {
    if (inputBox.value !== 'sanjay@gmail.com') {
      return { invalidMail: true }; //The Control is invalid
    }
    return null; //The control is valid
  }

}

// class{
//     static function(){
//         return {key:true/false}
//     }
// }
