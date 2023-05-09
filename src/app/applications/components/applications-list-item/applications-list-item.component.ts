import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { FoldableComponent } from '../../../shared/components/foldable/foldable.component';
import { HoverDirective } from '../../../shared/directives/hover.directive';

import { AppLocaleService } from '../../../core/services/app-locale.service';

import { PublishedApplicationType } from '../../types/published-application.type';

@Component({
  selector: 'app-applications-list-item',
  templateUrl: './applications-list-item.component.html',
  styleUrls: ['./applications-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationsListItemComponent {
  @Input()
  public set publishedApplication(value: PublishedApplicationType) {
    this._publishedApplication = value;
  }

  @Input()
  public set showActions(value: boolean) {
    this._showActions = value;
  }

  @Input()
  public set actionsDisabled(value: boolean) {
    this._actionsDisabled = value;
  }

  @Input()
  public set deletionInProgress(value: boolean) {
    this._deletionInProgress = value;
  }

  @Output()
  public readonly deleteClick = new EventEmitter<void>();

  @ViewChild(FoldableComponent)
  private readonly _foldableComponentRef?: FoldableComponent;

  @ViewChild(HoverDirective)
  private readonly _hover?: HoverDirective;

  public get isUnfolded(): boolean {
    if (this._foldableComponentRef === undefined) {
      return false;
    }

    return this._foldableComponentRef.isUnfolded;
  }

  public get isHovered(): boolean {
    if (this._hover === undefined) {
      return false;
    }

    return this._hover.isHovered;
  }

  protected _publishedApplication?: PublishedApplicationType;
  protected _showActions = false;
  protected _actionsDisabled = false;
  protected _deletionInProgress = false;

  constructor(protected readonly _localeService: AppLocaleService) {}

  protected handleCardClick(): void {
    if (this._foldableComponentRef === undefined) {
      throw new Error(`Foldable component ref is not defined!`);
    }

    if (this._hover === undefined) {
      throw new Error(`Hover directive ref is not defined!`);
    }

    if (this.isUnfolded) {
      this._foldableComponentRef.fold();
      this._hover.unhover();
    } else {
      this._foldableComponentRef.unfold();
    }
  }

  protected handleDeleteButtonClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.deleteClick.emit();
  }
}
