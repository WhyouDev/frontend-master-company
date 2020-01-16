import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { InputTextareaModule } from 'primeng/inputtextareamodule';
// import { NgxEditorModule } from 'ngx-editor';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
    // InputTextareaModule,
    // NgxEditorModule
  ]
})
export class ProductModule { }
