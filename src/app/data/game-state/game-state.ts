import { Component } from '@angular/core';
import { defaultGameState, pack } from '../library';

@Component({
  selector: 'app-game-state',
  imports: [],
  templateUrl: './game-state.html',
  styleUrl: './game-state.scss',
})
export class GameState {
  state = defaultGameState

  loadManaPack(manaPack: number[]): void {
    this.state.boxSelected = true;
    this.state.unplayedMana = manaPack
  }

  playMana(manaSelection: number): void {
    this.state.playedMana = true;
    this.state.lastPlayed = manaSelection;
    this.state.unplayedMana = this.state.unplayedMana.filter(
      mana => mana !== manaSelection
    );
    this.state.availableMana = this.state.availableMana.concat(
      manaSelection
    );
    this.state.availableMana = pack.untappedMana.includes(manaSelection) ?
      this.state.availableMana.concat(manaSelection)
      :
      this.state.availableMana;
    this.state.tappedMana = pack.untappedMana.includes(manaSelection) ?
      this.state.tappedMana
      :
      this.state.tappedMana.concat(manaSelection)

  }

  undoPlayMana(): void {
    const lastPlayedTypeSafe = typeof this.state.lastPlayed === "number" ?
      this.state.lastPlayed : 20

    const currentMana = this.state.availableMana.concat(this.state.tappedMana)
    const sacrificedMana = this.state.sacrificedMana

    const lastPlayedIsAvailable =
      !sacrificedMana.includes(lastPlayedTypeSafe) &&
      currentMana.includes(lastPlayedTypeSafe)

    if (lastPlayedIsAvailable) {
      this.state.unplayedMana = typeof (this.state.lastPlayed) === "number" ? this.state.unplayedMana.concat(this.state.lastPlayed)
        :
        this.state.unplayedMana;

      this.state.availableMana = this.state.availableMana.length > 0 ?
        this.state.availableMana.filter(mana => mana !== this.state.lastPlayed)
        :
        this.state.availableMana;

      this.state.tappedMana = this.state.tappedMana.length > 0 ?
        this.state.tappedMana.filter(mana => mana !== this.state.lastPlayed)
        :
        this.state.tappedMana;

      this.state.lastPlayed = null;
      this.state.playedMana = false;
    }

  }

  tapMana(manaSelection: number): void {
    this.state.availableMana = this.state.availableMana.filter(mana => mana !== manaSelection);
    this.state.tappedMana = this.state.tappedMana.concat(manaSelection)
  }

  untapMana(): void {
    this.state.availableMana = this.state.availableMana.concat(this.state.tappedMana);
    this.state.tappedMana = []
  }

  sacrificeMana(manaSelection: number): void {
    this.state.tappedMana.filter(mana => mana !== manaSelection);
    this.state.sacrificedMana = this.state.sacrificedMana.concat(manaSelection);
    this.state.lastSacrified = manaSelection;
  }

  undoSacrificeMana(manaSelection?: number): void {
    this.state.tappedMana =
      typeof (manaSelection) === "number" ?
        this.state.tappedMana.concat(manaSelection)
        :
        typeof (this.state.lastSacrified) === "number" ?
          this.state.tappedMana.concat(this.state.lastSacrified)
          :
          this.state.tappedMana
      ;

    this.state.sacrificedMana =
      typeof (manaSelection) === "number" ?
        this.state.sacrificedMana.filter(mana => mana !== manaSelection)
        :
        typeof (this.state.lastSacrified) === "number" ?
          this.state.sacrificedMana.filter(mana => mana !== this.state.lastSacrified)
          :
          this.state.sacrificedMana;

    this.state.lastSacrified = null;

  }

  nextTurn(): void {
    this.state.availableMana = this.state.availableMana.concat(this.state.tappedMana);
    this.state.tappedMana = []
  }

  newGame(): void {
    this.state = defaultGameState
  }
}
