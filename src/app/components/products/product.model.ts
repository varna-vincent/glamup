import { Deserializable } from "./../../shared/models/deserializable.model";

export class Product {
  shadeName: string;
  shadeSubtitle: string;
  productName: string;
  productSubtitle: string; 
  description: string; 
  modelNumber: string; 
  productType: string; 
  productOwner: string; 
  productImage: string; 
  createdBy: string; 
  price: number; 

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
