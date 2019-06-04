import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  
  public product: any = {
  	shadeName: '',
  	shadeSubtitle: '',
  	productName: '',
    productSubtitle: '', 
    description: '',
    modelNumber: '',
    productType: '',
    productOwner: '', 
    productImage: '', 
    price: 0
  }; 

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addProduct(product: Product) {
  	this.productService.createProduct(product);
  }

}
