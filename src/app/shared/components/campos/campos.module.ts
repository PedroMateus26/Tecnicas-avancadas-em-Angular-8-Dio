import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material/material.module';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputSelectComponent } from './input-select/input-select.component';

@NgModule({
  declarations: [InputTextComponent, InputNumberComponent, InputDateComponent, InputTextareaComponent, InputSelectComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [InputTextComponent, InputNumberComponent, InputDateComponent, InputTextareaComponent, InputSelectComponent],

})
export class CamposModule { }
