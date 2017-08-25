import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ForbiddenNameValidator} from './forbidden-name.validator';
import {NG_VALIDATORS} from "@angular/forms";
import {MinValidator} from "./min.validator";
import {MaxValidator} from "./max.validator";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, ForbiddenNameValidator, MinValidator, MaxValidator],
  exports: [PageNotFoundComponent, ForbiddenNameValidator, MinValidator, MaxValidator],
  providers: []
})
export class SharedModule { }
