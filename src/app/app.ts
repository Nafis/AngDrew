import { Component, signal } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngDrew');

  confzHeight: string = "600";
  confzWidth: string = "600";

  doInterval(cpt: number): void {
    console.log("App interval recu : " + cpt);
  }

  tiles: Tile[] = [
      {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
      {text: 'Three', cols: 3, rows: 3, color: 'lightpink'},
      {text: 'Four', cols: 4, rows: 1, color: '#DDBDF1'},
    ];



}
