import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataSource } from '../data-source';

@Component({
  selector: 'app-list-draws',
  standalone: false,
  templateUrl: './list-draws.html',
  styleUrl: './list-draws.scss',
})
export class ListDraws {

  constructor(public dataSource: DataSource) {}
  
  doClick(id: string): void {
    console.log("Click sur dessin id=", id);
  }


}