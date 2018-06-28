import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public numero1: number;
  public numero2: number;
  public resultado: number;

  public numero3: number;
  public numero4: number;
  public resultado1: number;

  public numero5: number;
  public numero6: number;
  public resultado2: number;

  public numero7: number;
  public numero8: number;
  public resultado3: number;

  public suma() { this.resultado = this.numero1 + this.numero2; }

  public resta() { this.resultado1 = this.numero3 - this.numero4; }

  public multiplicacion() { this.resultado2 = this.numero5 * this.numero6; }

  public division() { this.resultado3 = this.numero7 / this.numero8; }
}
