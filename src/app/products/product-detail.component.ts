import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product detail';
  product: IProduct;
  errorMessage: string = '';

  constructor(private readonly route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    this.productService.getProductDetails(id).subscribe({
      next: product => {
        this.product = product;
        console.log(this.product);
      },
      error: err => this.errorMessage = err
    });
    // this.product = {
    //   productId: id,
    //   productName: 'Garden Cart',
    //   productCode: 'GDN-0023',
    //   releaseDate: 'March 18, 2019',
    //   description: '15 gallon capacity rolling garden cart',
    //   price: 32.99,
    //   starRating: 4.2,
    //   imageUrl: 'assets/images/garden_cart.png'
    // };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
