import { ErrorService } from '@/app/services/error.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent {
  constructor (public readonly errorService: ErrorService) {
  }
}
