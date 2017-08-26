import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataCategories} from "./data-categories.service";
import {Init1, Init2, Init3, Init4, Init5} from "./init-services";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DataCategories, Init1, Init2, Init3, Init4, Init5],
})
export class CoreModule { }
