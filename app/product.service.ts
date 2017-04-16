import { Injectable, EventEmitter  } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';



@Injectable()
export class ProductService {
  
    
  
  private products: Product[] = [];


  constructor(private http: Http) {}

  getProducts() {
    return this.http.get('http://qa.inksoft.com/green_beans/Api2/GetProducts?Format=JSON')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Product[]) => {
          this.products = data;
//          this.recipesChanged.emit(this.recipes);
        }
      );
  }

//  getRecipe(id: number) {
//    return this.recipes[id];
//  }
//
//  deleteRecipe(recipe: Recipe) {
//    this.recipes.splice(this.recipes.indexOf(recipe), 1);
//  }
//
//  addRecipe(recipe: Recipe) {
//    this.recipes.push(recipe);
//  }
//
//  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
//    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
//  }
//
//  storeData() {
//    const body = JSON.stringify(this.recipes);
//    const headers = new Headers({
//      'Content-Type': 'application/json'
//    });
//    return this.http.put('https://recipebook-8c242.firebaseio.com/recipes.json', body, {headers: headers});
//  }

  

}






