import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriasProvider } from './../../../providers/categorias/categorias';
import { Observable } from 'rxjs/Observable'

@IonicPage()
@Component({
  selector: 'page-categorias-lista',
  templateUrl: 'categorias-lista.html',
})
  export class CategoriasListaPage {
  categorias: Observable<any[]>;
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private categoriasProvider: CategoriasProvider){

      this.categorias = categoriasProvider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasListaPage');
  }

}
