import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const translateLoaderFactory = (httpClient: HttpClient) => {
  return new TranslateHttpLoader(httpClient);
};
