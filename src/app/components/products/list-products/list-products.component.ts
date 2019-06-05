import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, public firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
    this.firebaseAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        this.productService.getProductsByUserId(user.uid).subscribe(data => {
          this.products = data.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            } as Product;
          });
          console.log(this.products);
        });
      } 
    });
  }

}