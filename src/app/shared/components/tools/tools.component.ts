import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

import { LanguageSelectionContainerComponent } from '@core/components/language-selection-container/language-selection-container.component';
import { AboutButtonComponent } from '../about-button/about-button.component';
import { AccountButtonComponent } from '../account-button/account-button.component';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { AccountMenuComponent } from '../account-menu/account-menu.component';

import { AboutUsDialogService } from '../../../core/services/about-us-dialog.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
    LanguageSelectionContainerComponent,
    AboutButtonComponent,
    AccountButtonComponent,
    LoginButtonComponent,
    AccountMenuComponent,
  ],
})
export class ToolsComponent {
  @Input()
  public set userIsLoggedIn(value: boolean) {
    this._userIsLoggedIn = value;
  }

  protected _userIsLoggedIn = false;

  constructor(private readonly _aboutUsDialogService: AboutUsDialogService) {}

  protected handleAboutButtonClick(): void {
    this._aboutUsDialogService.openDialog();
  }
}
