import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';

@Component({
  selector: 'autocomplete',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldComponent),
      multi: true,
    },
  ],
})
export class FieldComponent implements ControlValueAccessor {
  @Input() options!: Observable<string[]>;
  @Input() placeholder: string = '';
  @Input() label: string = '';

  public formGroup!: FormGroup;
  public filteredOptions: Observable<string[]> | null | undefined;
  public disabled = false;
  public value!: Array<string>;

  constructor() {}

  ngOnInit(): void {}

  private onChange = (value: Array<string>) => {};
  private onTouched = () => {};

  public writeValue(value: Array<string>): void {
    this.value = value;
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  public markAsTouched(): void {
    this.onTouched();
  }

  public onOptionSelected(e: MatAutocompleteSelectedEvent): void {
    if (this.disabled) {
      return;
    }
    this.value = e.option.value;
    this.onChange(this.value);
  }
}
