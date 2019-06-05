import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  
  product: Product;
  downloadURL: Observable<string>;
  isDisabled: boolean = true;

  constructor(private productService: ProductService, public firebaseAuth: AngularFireAuth, private storage:      AngularFireStorage, private router: Router) { }

  ngOnInit() {
  }

  addProduct(addProductForm) {

    let user = this.firebaseAuth.auth.currentUser;
    this.product = addProductForm.value;
    this.product.createdBy = user.uid;
    this.product.productImage = this.downloadURL;
    console.log(this.product);
  	this.productService.createProduct(this.product).then(
      this.router.navigate(['myProducts'])
    );
  }

  uploadImage(event) {
    const file = event.target.files[0];
    const filePath = event.target.files[0].name;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.downloadURL = url;
          this.isDisabled = false;
        });
      })
    ).subscribe();
  }

}