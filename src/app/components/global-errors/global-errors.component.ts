import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-global-errors',
  templateUrl: './global-errors.component.html',
  styleUrls: ['./global-errors.component.scss'],
})
export class GlobalErrorsComponent {
  isClosed: BehaviorSubject<false>;
  constructor(public errorServ: ErrorService) {}

  onClose() {
    return !this.isClosed;
  }
}
