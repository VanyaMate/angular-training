import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class ErrorService {
    public error$: Subject<string> = new Subject();

    constructor () {
    }

    public handle (message: string) {
        this.error$.next(message);
        setTimeout(() => {
            this.clear();
        }, 2000)
    }

    public clear () {
        this.error$.next('');
    }
}
