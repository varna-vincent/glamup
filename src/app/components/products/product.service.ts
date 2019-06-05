import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from './product.model';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  constructor(private firestore: AngularFirestore) { 
  	this.productsCollection = firestore.collection<Product>('products');
    this.products = this.productsCollection.valueChanges();
  }

  createProduct(product: Product) {
    return this.productsCollection.add(product);
  }

  getAllProducts() {
  	return this.firestore.collection('products').snapshotChanges();
  }

  getProductsByUserId(userId: string) {
  	this.productsCollection = this.firestore.collection<Product>('products', ref => {
     return ref.where('createdBy', '==', userId)
    });
  	return this.productsCollection.snapshotChanges();
  }
}
