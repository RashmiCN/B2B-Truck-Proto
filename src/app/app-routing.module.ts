import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DriversPageComponent } from './drivers-page/drivers-page.component';
import { ShippersPageComponent } from './shippers-page/shippers-page.component';
import { SignInpageComponent } from './sign-inpage/sign-inpage.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SupportPageComponent } from './support-page/support-page.component';

const routes: Routes = [
  { path: 'app-home-page', component: HomePageComponent },
  { path: 'app-drivers-page', component: DriversPageComponent },
  { path: 'app-shippers-page', component: ShippersPageComponent },
  { path: 'app-sign-inpage', component: SignInpageComponent },
  { path: 'app-sign-up-page', component: SignUpPageComponent },
  { path: 'app-support-page', component: SupportPageComponent},
  {
    path: '',
    redirectTo: '/app-drivers-page',
    pathMatch: 'full'
  }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
