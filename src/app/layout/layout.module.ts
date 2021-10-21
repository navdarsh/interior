import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouteresolverResolver } from '../guard/routeresolver.resolver';

@NgModule({
  declarations: [
    LayoutComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    FlexLayoutModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  providers:[RouteresolverResolver]
})
export class LayoutModule { }
