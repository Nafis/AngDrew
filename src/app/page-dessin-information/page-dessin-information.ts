import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-dessin-information',
  standalone: false,
  templateUrl: './page-dessin-information.html',
  styleUrl: './page-dessin-information.scss',
})
export class PageDessinInformation {
  dessinInfoForm : FormGroup;



  constructor(private fb: FormBuilder) {
    this.dessinInfoForm= this.fb.group({
      name: ['', [Validators.required]], 
      author: ['',[Validators.required]], 
      description: ['']
    });
  }
  onSubmit() {
    console.log(this.dessinInfoForm.value);
  }
} 
