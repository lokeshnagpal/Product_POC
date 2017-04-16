import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent} from './app.component';
import { ProductListComponent } from '../app/products/product-list/product-list.component'; 
import { ProductService } from './product.service';
 
@NgModule({
    declarations: [
         AppComponent,
         ProductListComponent
         
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        
    ],
    
    providers:[ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
