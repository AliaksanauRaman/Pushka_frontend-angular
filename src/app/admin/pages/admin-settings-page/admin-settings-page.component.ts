import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin-settings-page',
  templateUrl: './admin-settings-page.component.html',
  styleUrls: [
    './admin-settings-page.component.scss',
    '../../styles/_admin-page-common.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSettingsPageComponent {}