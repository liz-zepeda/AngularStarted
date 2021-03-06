import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    // selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit {
  pageTitle =  'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
    // listFilter: string = 'cart';

    _listFilter: string;

    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];
    errorMessage: string;

    constructor(private productService: ProductService ) {
      // this.filteredProducts = this.products;
      // this.listFilter = 'cart';
    }

    performFilter(filterBy: string): IProduct[] {
      console.log('filter', filterBy);
      filterBy =  filterBy.toLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
      // console.log('liiz', message)
      this.pageTitle = 'Product List ' + message;
    }

    ngOnInit(): void {
      console.log('in onInit');
      //this.products = 
      this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
  }
}
