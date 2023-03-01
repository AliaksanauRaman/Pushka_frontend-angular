import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from '../../shared/dependencies/api-url/injection-token';
import { PublishedHelpOfferListType } from '../../shared/types/published-help-offer-list.type';
import { SuccessCreateHelpOfferResponseDataType } from '../../shared/types/success-create-help-offer-response-data.type';
import { CreateHelpOfferDto } from '../../shared/dtos/create-help-offer.dto';

@Injectable({
  providedIn: 'root',
})
export class HelpOffersHttpService {
  private readonly helpOffersApiUrl = `${this.apiUrl}/api/help-offers`;

  constructor(
    @Inject(API_URL)
    private readonly apiUrl: string,
    private readonly httpClient: HttpClient
  ) {}

  public getPublished(): Observable<PublishedHelpOfferListType> {
    return this.httpClient.get<PublishedHelpOfferListType>(
      `${this.helpOffersApiUrl}/published`
    );
  }

  public createOne(
    createHelpOfferDto: CreateHelpOfferDto
  ): Observable<SuccessCreateHelpOfferResponseDataType> {
    return this.httpClient.post<SuccessCreateHelpOfferResponseDataType>(
      this.helpOffersApiUrl,
      createHelpOfferDto.toRequestBody()
    );
  }
}