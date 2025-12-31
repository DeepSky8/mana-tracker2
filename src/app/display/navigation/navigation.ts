import { Component, EventEmitter, input, Output } from '@angular/core';
import { defaultGameState, IGameState } from '../../data/library';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  state = input<IGameState>(defaultGameState)
  @Output() untapAll = new EventEmitter();
  @Output() unpickMana = new EventEmitter();
  @Output() unsacMana = new EventEmitter();
  @Output() advanceTurn = new EventEmitter();

  public untapAllMana(): void {
    this.untapAll.emit();
  }

  public unpickThisMana(): void {
    this.unpickMana.emit();
  }

  public unSacThisMana(): void {
    this.unsacMana.emit();
  }

  public nextTurn(): void {
    this.advanceTurn.emit();
  }
}
