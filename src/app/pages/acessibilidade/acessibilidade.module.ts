import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AcessibilidadeComponent } from "./acessibilidade.component";
import { AcessibilidadeRoutingModule } from "./acessibilidade-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations:[
        AcessibilidadeComponent
    ],
    imports:[
        CommonModule,
        AcessibilidadeRoutingModule,
        SharedModule
    ]
})
export class AcessibilidadeModule{}