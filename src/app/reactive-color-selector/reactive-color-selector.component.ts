import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-color-selector',
  templateUrl: './reactive-color-selector.component.html',
  styleUrls: ['./reactive-color-selector.component.css'],
})
export class ReactiveColorSelectorComponent implements OnInit {
  colorControls: FormControl[] = [];
  countControl: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.countControl = new FormControl(0);

    this.countControl.valueChanges.subscribe((count) => {
      if (this.colorControls.length < count) {
        this.colorControls.push(
          new FormControl('', [Validators.required, this.validColorValidator()])
        );
      } else {
      }
    });
  }

  validColorValidator(): ValidatorFn {
    return (control: AbstractControl): null | { [key: string]: any } => {
      const color = control.value;
      switch (color) {
        case 'rot':
        case 'blau':
          return null;
      }

      return { forbiddenColor: color };
    };
  }
}
