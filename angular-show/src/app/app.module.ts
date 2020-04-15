import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFiltersComponent } from './app-filters/app-filters.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ListShowsComponent } from './main-screen/list-shows/list-shows.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';
import { SearchNamePipe } from './search-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppFiltersComponent,
    MainScreenComponent,
    ListShowsComponent,
    SortPipe,
    FilterPipePipe,
    SearchNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
