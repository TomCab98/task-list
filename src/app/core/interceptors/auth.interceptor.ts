import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core';

export const authInterceptor = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const cookieService = inject(CookieService);
  const excludedUrls = ['/auth/login'];

  if (excludedUrls.some((url) => req.url.includes(url))) {
    return next(req);
  }

  const token = cookieService.get('token');

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  }

  return next(req);
};
