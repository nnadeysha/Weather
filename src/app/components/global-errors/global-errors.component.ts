import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-global-errors',
  templateUrl: './global-errors.component.html',
  styleUrls: ['./global-errors.component.scss'],
})
export class GlobalErrorsComponent {
  constructor(public errorServ: ErrorService) {}
}
