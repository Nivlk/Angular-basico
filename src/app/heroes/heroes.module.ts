import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeCompontent } from './heroe/heore.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeCompontent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}