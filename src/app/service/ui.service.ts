import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showModalSubject = new BehaviorSubject<boolean>(false);

  getShowModal(): Observable<boolean> {
    return this.showModalSubject.asObservable();
  }

  toggleModal(): void {
    this.showModalSubject.next(!this.showModalSubject.value);
  }

  setModalState(state: boolean): void {
    this.showModalSubject.next(state);
  }
}
