import { IProduct } from '@/app/models/products';
import { ProductsService } from '@/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Observable, take, takeLast } from 'rxjs';


@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
    constructor (private readonly productsService: ProductsService) {
    }

    public ngOnInit (): void {
        this.loading = true;
        this.products$ = this.productsService.getAll();
        this.productsService.getAll()
            .subscribe((products: IProduct[]) => {
                this.products = products;
                this.loading  = false;
            });
    }

    public title: string        = 'angular';
    public products: IProduct[] = [];
    public products$: Observable<IProduct[]>;
    public loading: boolean     = false;

}
