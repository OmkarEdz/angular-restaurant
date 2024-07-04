import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cooking-req-dialog',
  templateUrl: './cooking-req-dialog.component.html',
  styleUrls: ['./cooking-req-dialog.component.scss']
})
export class CookingReqDialogComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      textarea: ['']
    });
  }

  clearTextarea() {
    const textareaControl = this.form.get('textarea');
    if (textareaControl) {
      textareaControl.setValue('');
    }
  }
}
