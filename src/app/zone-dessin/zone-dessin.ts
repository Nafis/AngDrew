import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import * as fabric from 'fabric';

@Component({
  selector: 'app-zone-dessin',
  standalone: false,
  templateUrl: './zone-dessin.html',
  styleUrls: ['./zone-dessin.scss'],
})

export class ZoneDessin implements AfterViewInit, OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log("ZoneDessin destroy");
    if (this.intervalToken != -1) {
      clearInterval(this.intervalToken);
      this.intervalToken = -1;
    }
  }

  ngOnInit(): void {
    console.log("ZoneDessin init");
    this.intervalCompteur+=1;
    this.intervalToken = window.setInterval(() => {
      this.intervalCompteur+=1;
      //emission de l'evenement
      this.intervalEvt.emit(this.intervalCompteur);
    }, 2000);

  }
  private intervalToken:number = -1;
  private intervalCompteur: number = 0;


  leCanvas?: fabric.Canvas;
  @Input('zHeight') zHeight: string = "700";
  @Input('zWidth') zWidth: string = "700";

  //@Output('compteur') intervalEvt = new EventEmitter<number>();

  @Output('compteur') intervalEvt = new EventEmitter<number>();
  private testPopulateCanvas(): void {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 200,
      height: 200,
    });
    this.leCanvas!.add(rect);
  }

  ngAfterViewInit(): void {
    this.leCanvas = new fabric.Canvas('lazone');
    this.testPopulateCanvas();
  }
  

}
