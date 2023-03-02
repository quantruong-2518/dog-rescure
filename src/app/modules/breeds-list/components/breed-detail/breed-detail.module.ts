import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedDetailRoutingModule } from './breed-detail-routing.module';
import { BreedDetailComponent } from './breed-detail.component';


@NgModule({
  declarations: [
    BreedDetailComponent
  ],
  imports: [
    CommonModule,
    BreedDetailRoutingModule
  ]
})
export class BreedDetailModule { }
