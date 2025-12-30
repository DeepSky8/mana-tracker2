import { Component, signal } from '@angular/core';
import { Header } from './display/header/header';
import { GameState } from './data/game-state/game-state';
import { ManaPackType } from './display/mana-pack-type/mana-pack-type';
import { Navigation } from './display/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [Header, ManaPackType, Navigation],
  templateUrl: './app.html',
  styleUrl: '../styles/styles.scss'
})
export class App extends GameState {
  protected readonly title = signal('mana-tracker');


}
