import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataCategories} from "./data-categories.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DataCategories],
})
export class CoreModule { }
