import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FieldComponent } from './components/field/field.component';
import { LazyImgDirective } from './directives/lazy-image.directive';
import { BreedNamePipe } from './pipes/breed-name.pipe';
import { SubBreedNamePipe } from './pipes/sub-breed-name.pipe';

const COMPONENTS = [FieldComponent];

const MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
];

const DIRECTIVES = [LazyImgDirective];

const PIPES = [BreedNamePipe, SubBreedNamePipe];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES, ...DIRECTIVES, ...PIPES],
  providers: [...PIPES],
})
export class ShareModule {}
