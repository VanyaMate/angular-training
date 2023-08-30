import { IProduct } from '@/app/models/products';
import { ErrorService } from '@/app/services/error.service';
import {
    HttpClient,
    HttpErrorResponse,
    HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor (private readonly httpClient: HttpClient,
                 private readonly errorService: ErrorService) {
    }

    public getAll (): Observable<IProduct[]> {
        return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products1', {
            params: new HttpParams({
                fromObject: {
                    limit: 5,
                },
            }),
        })
            .pipe(
                delay(500),
                catchError(this.errorHandler.bind(this)),
            );
    }

    private errorHandler (error: HttpErrorResponse) {
        this.errorService.handle(error.message);
        return [];
    }
}
