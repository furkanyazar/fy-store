import { ShopComponent } from './../components/shop/shop.component';
import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private shopComponent: ShopComponent) { }

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""

    var products: Product[] = filterText ? value.filter((product: Product) => product.productName.toLocaleLowerCase().indexOf(filterText) !== -1) : value
    this.shopComponent.numberOfProducts = products.length
    this.shopComponent.page = 1

    return products
  }

}
