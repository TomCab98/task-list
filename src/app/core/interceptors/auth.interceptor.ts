import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const excludedUrls = ['/auth/login'];

  if (excludedUrls.some((url) => req.url.includes(url))) {
    return next(req);
  }

  const token = localStorage.getItem('token');

  console.log('interceptor, ' + token);

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
