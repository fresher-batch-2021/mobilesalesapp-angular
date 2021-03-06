import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SlideshowComponent,
    HomeComponent,
    BrandComponent,
    ProductComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
