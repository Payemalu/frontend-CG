import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { SngComponent } from "./pages/sng/sng.component";
import { SnhComponent } from "./pages/snh/snh.component";
import { SngFormComponent } from "./pages/sng-form/sng-form.component";
import { SnhFormComponent } from "./pages/snh-form/snh-form.component";
import { FormularyComponent } from "./pages/formulary/formulary.component";
import { DesignFormComponent } from "./pages/design-form/design-form.component";
import { ListarDisenoComponent } from "./components/listar-diseno/listar-diseno.component";
import { ConstructionFormComponent } from "./pages/construction-form/construction-form.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'SNG', component: SngComponent },
    { path: 'SNG/sng-form', component: SngFormComponent },
    { path: 'SNH', component: SnhComponent },
    { path: 'SNG/snh-form', component: SnhFormComponent },
    { path: 'formularios', component: FormularyComponent},
    { path: 'diseno', component: DesignFormComponent},
    { path: 'construccion', component: ConstructionFormComponent},
    { path: 'listar-diseno', component: ListarDisenoComponent},
    { path: 'editar-formulario/:id', component: FormularyComponent},
    { path: '**', component: NopagefoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}