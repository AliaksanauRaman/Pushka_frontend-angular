import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatesComparerService {
  public areDatesEqual(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}
