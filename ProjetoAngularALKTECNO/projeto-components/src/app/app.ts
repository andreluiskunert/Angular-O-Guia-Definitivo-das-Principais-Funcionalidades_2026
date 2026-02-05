import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./card/card";

@Component({
  selector: 'app-root',
  standalone: true,           // ⭐⭐⭐ FALTAVA ISSO
  imports: [Card],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']   // ⭐ use styleUrls (plural)
})
export class App {
  protected readonly title = signal('projeto-components');
}
