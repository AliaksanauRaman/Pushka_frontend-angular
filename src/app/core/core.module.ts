import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@angular/cdk/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { PlusIconModule } from '../shared/icons/plus-icon/plus-icon.module';
import { InputControlModule } from '../shared/components/input-control/input-control.module';
import { PhoneControlModule } from '../shared/components/phone-control/phone-control.module';
import { DateControlModule } from '../shared/components/date-control/date-control.module';
import { TextareaFieldControlModule } from '../shared/components/textarea-field-control/textarea-field-control.module';
import { AutocompleteControlModule } from '../shared/components/autocomplete-control/autocomplete-control.module';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { CheckboxWithTextControlComponent } from '../shared/components/checkbox-with-text-control/checkbox-with-text-control.component';
import { WhiteSquareButtonComponent } from '../shared/components/white-square-button/white-square-button.component';
import { CloseDialogButtonComponent } from '../shared/components/close-dialog-button/close-dialog-button.component';
import { ManWithMailImageComponent } from '../shared/images/man-with-mail-image/man-with-mail-image.component';
import { FeedbackImageComponent } from '../shared/images/feedback-image/feedback-image.component';
import { GirlWithLaptopImageComponent } from '../shared/images/girl-with-laptop-image/girl-with-laptop-image.component';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { PrimaryButtonComponent } from '../shared/components/primary-button/primary-button.component';
import { RecaptchaControlComponent } from '../shared/components/recaptcha-control/recaptcha-control.component';

import { AppPageLayoutComponent } from './layouts/app-page-layout/app-page-layout.component';
import { MainSectionLayoutComponent } from './layouts/main-section-layout/main-section-layout.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionsComponent } from './components/actions/actions.component';
import { MainComponent } from './components/main/main.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { DynamicPhoneListControlComponent } from './components/dynamic-phone-list-control/dynamic-phone-list-control.component';
import { LocationsControlComponent } from './components/locations-control/locations-control.component';
import { ErrorSnackBarComponent } from './components/error-snack-bar/error-snack-bar.component';
import { WarningSnackBarComponent } from './components/warning-snack-bar/warning-snack-bar.component';
import { InfoSnackBarComponent } from './components/info-snack-bar/info-snack-bar.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { SuccessCreateHelpOfferSectionComponent } from './sections/success-create-help-offer-section/success-create-help-offer-section.component';
import { SuccessCreateHelpItemSectionComponent } from './sections/success-create-help-item-section/success-create-help-item-section.component';
import { SuccessCreateHelpRequestSectionComponent } from './sections/success-create-help-request-section/success-create-help-request-section.component';
import { SuccessCreateFeedbackSectionComponent } from './sections/success-create-feedback-section/success-create-feedback-section.component';
import { AboutUsFirstSectionComponent } from './sections/about-us-first-section/about-us-first-section.component';
import { AboutUsSecondSectionComponent } from './sections/about-us-second-section/about-us-second-section.component';
import { AboutUsThirdSectionComponent } from './sections/about-us-third-section/about-us-third-section.component';
import { AboutUsFourthSectionComponent } from './sections/about-us-fourth-section/about-us-fourth-section.component';
import { CreateFeedbackDialogComponent } from './dialogs/create-feedback-dialog/create-feedback-dialog.component';
import { CreateHelpOfferDialogComponent } from './dialogs/create-help-offer-dialog/create-help-offer-dialog.component';
import { CreateHelpRequestDialogComponent } from './dialogs/create-help-request-dialog/create-help-request-dialog.component';
import { LoginOrSignupDialogComponent } from './dialogs/login-or-signup-dialog/login-or-signup-dialog.component';
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';
import { ConfirmApplicationDeletionDialogComponent } from './dialogs/confirm-application-deletion-dialog/confirm-application-deletion-dialog.component';
import { AboutUsDialogComponent } from './dialogs/about-us-dialog/about-us-dialog.component';

import {
  COUNTRIES_MAP,
  COUNTRIES_MAP_VALUE,
} from './dependencies/countries-map';
import {
  BELARUSIAN_CITIES,
  BELARUSIAN_CITIES_VALUE,
} from './dependencies/belarusian-cities';
import {
  POLISH_CITIES,
  POLISH_CITIES_VALUE,
} from './dependencies/polish-cities';
import {
  GEORGIAN_CITIES,
  GEORGIAN_CITIES_VALUE,
} from './dependencies/georgian-cities';
import {
  UKRAINIAN_CITIES,
  UKRAINIAN_CITIES_VALUE,
} from './dependencies/ukrainian-cities';
import {
  LITHUANIAN_CITIES,
  LITHUANIAN_CITIES_VALUE,
} from './dependencies/lithuanian-cities';
import { ALL_CITIES, allCitiesFactory } from './dependencies/all-cities';
import {
  ALL_LOCATIONS,
  allLocationsFactory,
} from './dependencies/all-locations';
import {
  PHONE_DIALLING_CODES,
  PHONE_DIALLING_CODES_VALUE,
} from './dependencies/phone-dialling-codes';
import { RECAPTCHA_CONFIG_PROVIDER } from './dependencies/recaptcha-config';
import { RECAPTCHA_LANGUAGE_PROVIDER } from './dependencies/recaptcha-language';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    DialogModule,
    TranslateModule,
    MatRippleModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTooltipModule,
    ClipboardModule,
    AngularSvgIconModule,
    PlusIconModule,
    InputControlModule,
    PhoneControlModule,
    DateControlModule,
    TextareaFieldControlModule,
    AutocompleteControlModule,
    SpinnerModule,
    CheckboxWithTextControlComponent,
    WhiteSquareButtonComponent,
    CloseDialogButtonComponent,
    ManWithMailImageComponent,
    FeedbackImageComponent,
    GirlWithLaptopImageComponent,
    ToolbarComponent,
    FooterComponent,
    PrimaryButtonComponent,
    RecaptchaControlComponent,
  ],
  declarations: [
    AppPageLayoutComponent,
    MainSectionLayoutComponent,
    NotFoundPageComponent,
    HeaderComponent,
    ActionsComponent,
    MainComponent,
    NavigationMenuComponent,
    DynamicPhoneListControlComponent,
    LocationsControlComponent,
    ErrorSnackBarComponent,
    WarningSnackBarComponent,
    InfoSnackBarComponent,
    LoadingOverlayComponent,
    SuccessCreateHelpOfferSectionComponent,
    SuccessCreateHelpItemSectionComponent,
    SuccessCreateHelpRequestSectionComponent,
    SuccessCreateFeedbackSectionComponent,
    AboutUsFirstSectionComponent,
    AboutUsSecondSectionComponent,
    AboutUsThirdSectionComponent,
    AboutUsFourthSectionComponent,
    CreateFeedbackDialogComponent,
    CreateHelpOfferDialogComponent,
    CreateHelpRequestDialogComponent,
    LoginOrSignupDialogComponent,
    InfoDialogComponent,
    ConfirmApplicationDeletionDialogComponent,
    AboutUsDialogComponent,
  ],
  providers: [
    {
      provide: COUNTRIES_MAP,
      useValue: COUNTRIES_MAP_VALUE,
    },
    {
      provide: BELARUSIAN_CITIES,
      useValue: BELARUSIAN_CITIES_VALUE,
    },
    {
      provide: POLISH_CITIES,
      useValue: POLISH_CITIES_VALUE,
    },
    {
      provide: GEORGIAN_CITIES,
      useValue: GEORGIAN_CITIES_VALUE,
    },
    {
      provide: UKRAINIAN_CITIES,
      useValue: UKRAINIAN_CITIES_VALUE,
    },
    {
      provide: LITHUANIAN_CITIES,
      useValue: LITHUANIAN_CITIES_VALUE,
    },
    {
      provide: ALL_CITIES,
      useFactory: allCitiesFactory,
      deps: [
        BELARUSIAN_CITIES,
        POLISH_CITIES,
        GEORGIAN_CITIES,
        UKRAINIAN_CITIES,
        LITHUANIAN_CITIES,
      ],
    },
    {
      provide: ALL_LOCATIONS,
      useFactory: allLocationsFactory,
      deps: [COUNTRIES_MAP, ALL_CITIES],
    },
    {
      provide: PHONE_DIALLING_CODES,
      useValue: PHONE_DIALLING_CODES_VALUE,
    },
    RECAPTCHA_CONFIG_PROVIDER,
    RECAPTCHA_LANGUAGE_PROVIDER,
  ],
})
export class CoreModule {}
