import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreedsListComponent } from './breeds-list.component';

const routes: Routes = [
  {
    path: '',
    component: BreedsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedListRoutingModule {}
