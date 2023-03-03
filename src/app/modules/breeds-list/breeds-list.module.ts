import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsListComponent } from './breeds-list.component';
import { BreedListRoutingModule } from './breeds-list-routing.module copy';
import { BreedService } from './breed.service';
import { ShareModule } from '../shared/share.module';

@NgModule({
  declarations: [BreedsListComponent],
  imports: [CommonModule, ShareModule, BreedListRoutingModule],
  exports: [BreedsListComponent],
  providers: [BreedService],
})
export class BreedsListModule {}
