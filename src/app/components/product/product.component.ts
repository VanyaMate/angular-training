import { IProduct } from '@/app/models/products';
import { Component, Input } from '@angular/core';


@Component({
    selector   : 'app-product',
    templateUrl: './product.template.html',
    styleUrls  : [
        './product.styles.scss',
    ],
})
export class ProductComponent {
    @Input() public product: IProduct;
    public detailsShow: boolean = false;

    public toggleDetails () {
        this.detailsShow = !this.detailsShow;
    }
}
