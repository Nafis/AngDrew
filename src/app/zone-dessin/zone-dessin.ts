import { AfterViewInit, Component, Input } from '@angular/core';
import * as fabric from 'fabric';

@Component({
  selector: 'app-zone-dessin',
  standalone: false,
  templateUrl: './zone-dessin.html',
  styleUrl: './zone-dessin.scss',
})

export class ZoneDessin implements AfterViewInit {
  leCanvas?: fabric.Canvas;
  @Input('zHeight') zHeight: string = "700";
  @Input('zWidth') zWidth: string = "700";
  //pour test
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
