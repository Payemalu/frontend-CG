import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SngComponent } from './pages/sng/sng.component';
import { SnhComponent } from './pages/snh/snh.component';
import { FormularyComponent } from './pages/formulary/formulary.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { DesignFormComponent } from './pages/design-form/design-form.component';
import { ListarDisenoComponent } from './components/listar-diseno/listar-diseno.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';



import { MatPaginatorModule } from '@angular/material/paginator';
import { ConstructionFormComponent } from './pages/construction-form/construction-form.component';
import { FrontPageComponent } from './components/front-page/front-page.component';

import { MatCardModule } from '@angular/material/card';


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
    SnhFormComponent,
    FormularyComponent,
    ProfileEditorComponent,
    DesignFormComponent,
    ListarDisenoComponent,
    ConstructionFormComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,

    MatFormFieldModule,
    MatNativeDateModule,
    MatPaginatorModule,

    MatCardModule
  ],
  providers: [
    MatDatepickerModule,
    MatMomentDateModule,
    // {
    //   provide: MAT_DATE_FORMATS,
    //   useValue: {
    //     parse: {
    //       dateInput: ['l', 'LL'],
    //     },
    //     display: {
    //       dateInput: 'L',
    //       monthYearLabel: 'MMM YYYY',
    //       dateA11yLabel: 'LL',
    //       monthYearA11yLabel: 'MMMM YYYY',
    //     },
    //   },
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
