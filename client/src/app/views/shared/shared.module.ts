import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SafeUrlPipe} from "./pipes/safe-url.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxDropzoneModule
  ],
  declarations: [
    SafeUrlPipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxDropzoneModule,
    SafeUrlPipe,
  ]
})
export class SharedModule {}
