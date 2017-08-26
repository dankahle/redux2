import { NgModule } from '@angular/core';
import {MdButtonModule, MdDialogModule, MdProgressBarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [BrowserAnimationsModule, MdButtonModule, MdProgressBarModule, MdDialogModule],
  exports: [BrowserAnimationsModule, MdButtonModule, MdProgressBarModule, MdDialogModule],
})
export class MaterialIndexModule { }
