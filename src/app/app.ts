import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { GameState } from './data/game-state/game-state';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: '../styles/styles.scss'
})
export class App extends GameState {
  protected readonly title = signal('mana-tracker');
  

}
