import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ActiveViewService } from '../../services/active-view.service';
import { CreateHelpOfferDialogService } from '../../services/create-help-offer-dialog.service';
import { CreateHelpRequestDialogService } from '../../services/create-help-request-dialog.service';

import { ViewName } from '../../../shared/enums/view-name.enum';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent {
  public readonly activeView$ = this.activeViewService.activeView$;
  public readonly viewName = ViewName;

  constructor(
    private readonly activeViewService: ActiveViewService,
    private readonly createHelpOfferDialogService: CreateHelpOfferDialogService,
    private readonly createHelpRequestDialogService: CreateHelpRequestDialogService
  ) {}

  public handleOfferHelpButtonClick(): void {
    this.createHelpOfferDialogService.openDialog();
  }

  public handleFindHelpButtonClick(): void {
    this.createHelpRequestDialogService.openDialog();
  }
}
