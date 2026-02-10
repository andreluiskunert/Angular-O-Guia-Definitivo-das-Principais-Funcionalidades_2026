import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./card/card";
import { CardRoxo } from "./card-roxo/card-roxo";

@Component({
  selector: 'app-root',
  standalone: true,           // ⭐⭐⭐ FALTAVA ISSO
  imports: [Card, CardRoxo],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']   // ⭐ use styleUrls (plural)
})
export class App {
  protected readonly title = signal('projeto-components');
}
