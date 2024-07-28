import { Component,  Renderer2, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @ViewChild('menuElement') menuElement!: ElementRef;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private renderer: Renderer2, private el: ElementRef, private _formBuilder: FormBuilder, private router: Router, private dialogRef: MatDialogRef<AddItemComponent>) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle the form submission
    console.log('Form submitted');
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  value: number = 0;

  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }

  redirectToCart() {
    this.router.navigate(['/cart']).then(() => {
      this.dialogRef.close();
    }).catch(() => {
      this.dialogRef.close(); // Still close the dialog if navigation fails
    });
  }

  addClassToElement() {
    const element = document.querySelector('.rest_menu_wrap');
    if (element) {
      element.classList.add('rest_menu_wrap_active'); // Replace 'new-class' with the class you want to add
    }
    this.dialogRef.close();
  }
}

