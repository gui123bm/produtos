import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';


@Injectable()
export class CategoriasProvider {
private PATH = 'categorias/';

  constructor(private db:AngularFireDatabase) {
  }

  public getAll(){
  return this.db.list(this.PATH)
    .snapshotChanges()
    .map(changes => {
        return changes.map (m=> ({ key: m.key, ...m.payload.val() }))
   })
}

get(categoriakey:string){
return this.db.object(this.PATH +  categoriakey)
.snapshotChanges()
.map(m => {
  return { key: m.key, ...m.payload.val()};
});
}


save(categoriaForm: any){
const categoria ={
name: categoriaForm.name,
description: categoriaForm.description
}

if(categoriaForm.key){
  //editar um existente//
  this.db.list(this.PATH)
  .update(categoriaForm.key, categoria);
  }else {
    //salvar um novo//
    this.db.list(this.PATH).push(categoria);
  }

}

remove(categoriakey: string){
this.db.list(this.PATH).remove(categoriakey);
}

}
