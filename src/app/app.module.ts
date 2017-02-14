import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { VehiclesComponent } from 'Vehicles/Vehicles.component';
import { VehicleDetailsComponent } from 'VehicleDetails/VehicleDetails.component';

import{VehiclesListService} from 'services/vehiclesList.service';




@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    NumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [VehiclesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
