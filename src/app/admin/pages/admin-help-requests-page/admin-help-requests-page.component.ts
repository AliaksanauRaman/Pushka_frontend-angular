import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin-help-requests-page',
  templateUrl: './admin-help-requests-page.component.html',
  styleUrls: [
    './admin-help-requests-page.component.scss',
    '../../styles/_admin-page-common.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminHelpRequestsPageComponent {}