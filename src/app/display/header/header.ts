import { Component, EventEmitter, input, Output } from '@angular/core';
import { defaultGameState, IGameState } from '../../data/library';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['../../../styles/styles.scss','./header.scss'],
})
export class Header {
  state = input<IGameState>(defaultGameState)
  @Output() newGame = new EventEmitter();

  public generateNewGame(): void {
    this.newGame.emit();
  }
}
