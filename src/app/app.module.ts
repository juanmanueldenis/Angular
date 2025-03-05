import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { coursesReducer } from './store/courses.reducer';   
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoursesEffects } from './store/courses.effects';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ courses: coursesReducer }), 

  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
