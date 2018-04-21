import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CountryComponent } from './country/country.component';
import { CountryService } from './country/country.service';
import { FormsModule } from '@angular/forms';  
import { HttpModule} from '@angular/http'; 


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
