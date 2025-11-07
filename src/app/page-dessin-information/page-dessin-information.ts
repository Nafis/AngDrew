import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DessinType } from '../model/dessin-type';
import { DataSource } from '../data-source';

@Component({
  selector: 'app-page-dessin-information',
  standalone: false,
  templateUrl: './page-dessin-information.html',
  styleUrl: './page-dessin-information.scss',
})
export class PageDessinInformation {
  dessinInfoForm : FormGroup;


  constructor(private fb: FormBuilder, public dataSource: DataSource) {
    this.dessinInfoForm= this.fb.group({
      name: ['', [Validators.required]], 
      author: ['',[Validators.required]], 
      description: ['']
    });
  }
  onSubmit() {
    console.log(this.dessinInfoForm.value);
    const newDessin = new DessinType();
    newDessin.name = this.dessinInfoForm.controls["name"].value;
    newDessin.author = this.dessinInfoForm.controls["author"].value;
    newDessin.description = this.dessinInfoForm.controls["description"].value;
    console.log("Nouveau dessin :", JSON.stringify(newDessin));
    this.dataSource.addNewDessin(newDessin);
  }

} 
