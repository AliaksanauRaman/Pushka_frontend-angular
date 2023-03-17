import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account-button',
  templateUrl: './account-button.component.html',
  styleUrls: ['./account-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountButtonComponent {}
