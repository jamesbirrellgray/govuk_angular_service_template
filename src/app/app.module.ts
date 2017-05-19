import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VendorsModule } from './vendors/vendors.module';
import { GovukHeaderComponent } from './partials/govuk-header/govuk-header.component';
import { GovukFooterComponent } from './partials/govuk-footer/govuk-footer.component';
import { YourDetailsComponent } from './views/your-details/your-details.component';
import { GovukBreadcrumbsComponent } from './partials/govuk-breadcrumbs/govuk-breadcrumbs.component';
import { IntroductionComponent } from './views/introduction/introduction.component';
import { YourPleaHasBeenSubmittedComponent } from './views/your-plea-has-been-submitted/your-plea-has-been-submitted.component';


const appRoutes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'your-details', component: YourDetailsComponent },
  { path: 'your-plea-has-been-submitted', component: YourPleaHasBeenSubmittedComponent },
  { path: '**', component: IntroductionComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    GovukHeaderComponent,
    GovukFooterComponent,
    YourDetailsComponent,
    GovukBreadcrumbsComponent,
    IntroductionComponent,
    YourPleaHasBeenSubmittedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    VendorsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
