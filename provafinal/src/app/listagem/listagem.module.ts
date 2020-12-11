import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListagemPage } from './listagem.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ListagemPageRoutingModule } from './listagem-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ListagemPage }]),
    ListagemPageRoutingModule,
  ],
  declarations: [ListagemPage]
})
export class ListagemPageModule {}
