import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NG_VALIDATORS} from "@angular/forms";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ForbiddenNameValidator} from "./validators/forbidden-name.validator";
import {MinValidator} from "./validators/min.validator";
import {MaxValidator} from "./validators/max.validator";
import {MaterialIndexModule} from "./material-index/material-index.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialIndexModule
  ],
  declarations: [PageNotFoundComponent, ForbiddenNameValidator, MinValidator, MaxValidator],
  exports: [PageNotFoundComponent, ForbiddenNameValidator, MinValidator, MaxValidator, MaterialIndexModule],
  providers: []
})
export class SharedModule { }
