import { Injectable } from '@angular/core';
import { DessinType } from './model/dessin-type';
import {v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DataSource {
  private dessins: DessinType[] = [];

  addNewDessin(newdessin: DessinType): void {
    newdessin.id = v4().toString();
    console.log("id dessin", newdessin.id);
    this.dessins.push(newdessin); //FIXME : persister dans une BDD
  } 
  public get size(): number {
    return this.dessins.length;
  }
  getdessins(id:string): DessinType {
    return{};
  }

  getAllDessins(): DessinType[] {
    return this.dessins;
  }
  
}
