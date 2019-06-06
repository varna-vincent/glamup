import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  	this.productService.getAllProducts().subscribe(data => {
      this.products = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Product;
      });
      console.log(this.products);
    });
  }

}
