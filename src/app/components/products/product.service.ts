import { Injectable } from '@angular/core';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestoreModule) { }

  createProduct(product: Product){
    return this.firestore.collection('products').add(product);
  }
}
