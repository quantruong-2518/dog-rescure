import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsListComponent } from './breeds-list.component';
import { BreedListRoutingModule } from './breeds-list-routing.module copy';
import { BreedService } from './breed.service';
import { ShareModule } from '../shared/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [BreedsListComponent],
  imports: [
    CommonModule,
    ShareModule,
    BreedListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  exports: [BreedsListComponent],
  providers: [BreedService],
})
export class BreedsListModule {}
