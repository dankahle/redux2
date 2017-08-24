import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataCategories} from "./data-categories.service";
import {DummyInitService} from "./dummy-init.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DataCategories, DummyInitService],
})
export class CoreModule { }
