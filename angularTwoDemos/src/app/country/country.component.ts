import { Component, OnInit } from '@angular/core';
import { Country  } from './country';  
import { State  } from './state'; 
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  ngOnInit() {

  }
  selectedCountry: Country = new Country(0, 'India');  
  countries: Country[];  
  states: State[];  
  constructor(private _countryService: CountryService) {  
      this.countries = this._countryService.getCountries();  
  }  
  onSelect(countryid) {  
      this.states = this._countryService.getStates().filter((item) => item.countryid == countryid);  
  }

}
