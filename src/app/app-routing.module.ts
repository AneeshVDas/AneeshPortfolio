import { HeaderComponent } from './component/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { PotentialComponent } from './component/potential/potential.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeroComponent } from './component/hero/hero.component';

const routes: Routes = [
  {path:'',         component:HeroComponent},
  {path:'hero',         component:HeroComponent},
  {path:'about',    component:AboutComponent},
  {path:'services',   component:PotentialComponent},
  {path:'work',  component:PortfolioComponent},
  {path:'contact',  component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
