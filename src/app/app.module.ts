import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SngComponent } from './pages/sng/sng.component';
import { SnhComponent } from './pages/snh/snh.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { SngFormComponent } from './pages/sng-form/sng-form.component';
import { SnhFormComponent } from './pages/snh-form/snh-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NopagefoundComponent,
    NavBarComponent,
    SidebarComponent,
    SngComponent,
    SnhComponent,
    SngFormComponent,
    SnhFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
