import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { utlComponent } from './Utl/utl.component';
import { ievnComponent } from './ievn/ievn.component';
import { MenuComponent } from './grupos/menu/menu.component';
import { SumaComponent } from './grupos/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './grupos/formularios/operas/operas.module';
import { IAlumnoFilterPipe } from './grupos/alumno-filter.pipe';
import { IricComponent } from './grupos/iric/iric.component';
import { FormsModule } from '@angular/forms';
import { CalificacionAlumComponent } from './grupos/calificacion-alum/calificacion-alum.component';

@NgModule({
  declarations: [
    AppComponent,
    utlComponent,
    IricComponent,
    ievnComponent,
    MenuComponent,
    SumaComponent,
    IAlumnoFilterPipe,
    CalificacionAlumComponent
  ],
  imports: [
    BrowserModule,
    OperasModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
