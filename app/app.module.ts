import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent} from './app.component';


@NgModule({
    declarations: [
         AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        
    ],
    
    bootstrap: [AppComponent]
})
export class AppModule {
}
