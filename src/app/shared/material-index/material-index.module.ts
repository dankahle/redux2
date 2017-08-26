import { NgModule } from '@angular/core';
import {MdButtonModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [BrowserAnimationsModule, MdButtonModule],
  exports: [BrowserAnimationsModule, MdButtonModule],
})
export class MaterialIndexModule { }
