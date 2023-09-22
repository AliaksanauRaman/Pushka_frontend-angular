import {
  ChangeDetectionStrategy,
  Component,
  inject,
  forwardRef,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  CdkListboxModule,
  ListboxValueChangeEvent,
} from '@angular/cdk/listbox';

import { DIALLING_CODES } from './dialling-code-dropdown-field.config';
import { BaseDropdownField } from '@shared/base/base-dropdown-field.directive';
import { DiallingCode } from '@shared/types/dialling-code';

@Component({
  selector: 'pu-dialling-code-dropdown-field',
  templateUrl: './dialling-code-dropdown-field.component.html',
  styleUrls: ['./dialling-code-dropdown-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DiallingCodeDropdownFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, OverlayModule, CdkListboxModule],
})
export class DiallingCodeDropdownFieldComponent extends BaseDropdownField<DiallingCode | null> {
  protected readonly _diallingCodes = inject(DIALLING_CODES);

  public override writeValue(value: unknown): void {
    if (value !== null && !DiallingCode.is(value)) {
      throw new Error('A null or DiallingCode is expected!');
    }

    this._value.set(value);
  }

  protected override getDefaultValue(): DiallingCode | null {
    return null;
  }

  protected override getDefaultPlaceholder(): string {
    return '+XXX';
  }

  protected handleListboxValueChange(
    event: ListboxValueChangeEvent<unknown>
  ): void {
    const selectedValue = event.value[0];

    if (!DiallingCode.is(selectedValue)) {
      throw new Error('A DiallingCode is expected!');
    }

    if (this.checkIsNewValue(selectedValue)) {
      this._value.set(selectedValue);
      this.onChange(selectedValue);
    }

    this.closePanel();
  }

  private checkIsNewValue(value: DiallingCode): boolean {
    const currentValue = this._value();
    return currentValue === null || !currentValue.equalsTo(value);
  }
}