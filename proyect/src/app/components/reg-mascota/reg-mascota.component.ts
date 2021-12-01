import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ClientService} from '../../client.service';

@Component({
  selector: 'app-reg-mascota',
  templateUrl: './reg-mascota.component.html',
  styleUrls: ['./reg-mascota.component.css']
})
export class RegMascotaComponent  implements OnInit{
  title = 'FormulariosHttp';
  form!: FormGroup;
  gg="jjjj";
  constructor(
    public client: ClientService,
    private fb: FormBuilder){

  }

  ngOnInit(): void {
   
    this.form = this.fb.group({
      img: [null],
      email: ['', Validators.required]
    });
  }

 /* upload(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      img: file
    });
    this.form.get('img').updateValueAndValidity()
  }

  onSubmit() {
    if (this.form.valid) {

      var formData: any = new FormData();
      formData.append("img", this.form.get('img').value);
      formData.append("id", this.form.get('email').value);

      this.client.postRequestSendForm('http://localhost:10101/upload', formData).subscribe(
        (response: any) => {
        
      },
      (error) => {
   
        console.log(error.status);
      })
 
    } else {
      console.log("Form error");
    }
  }
*/
}

