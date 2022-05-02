import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

const MaterialComponents = [
  MatButtonModule
]

@NgModule({
  imports: [
    MaterialComponents,
    MatButtonToggleModule,
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
