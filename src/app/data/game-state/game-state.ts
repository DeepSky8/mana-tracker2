import { Component, signal } from '@angular/core';
import { defaultGameState, pack } from '../library';

@Component({
  selector: 'app-game-state',
  imports: [],
  templateUrl: './game-state.html',
  styleUrl: './game-state.scss',
})
export class GameState {
  state = signal(defaultGameState);

  loadManaPack(manaPack: number[]): void {
    this.state.update(currentValue => ({ ...currentValue, boxSelected: true, unplayedMana: manaPack }));
  }

  playMana(manaSelection: number): void {
    this.state.update(currentValue => ({
      ...currentValue,
      playedMana: true,
      lastPlayed: manaSelection,
      unplayedMana: currentValue.unplayedMana.filter(
        mana => mana !== manaSelection
      ),
      availableMana: pack.untappedMana.includes(manaSelection) ?
        currentValue.availableMana.concat(manaSelection)
        :
        currentValue.availableMana,
      tappedMana: pack.untappedMana.includes(manaSelection) ?
        currentValue.tappedMana
        :
        currentValue.tappedMana.concat(manaSelection)

    }))

    // this.state.playedMana = true;
    // this.state.lastPlayed = manaSelection;
    // this.state.unplayedMana = this.state.unplayedMana.filter(

    // );
    // this.state.availableMana = this.state.availableMana.concat(
    //   manaSelection
    // );
    // this.state.availableMana = pack.untappedMana.includes(manaSelection) ?
    //   this.state.availableMana.concat(manaSelection)
    //   :
    //   this.state.availableMana;
    // this.state.tappedMana = pack.untappedMana.includes(manaSelection) ?
    //   this.state.tappedMana
    //   :
    //   this.state.tappedMana.concat(manaSelection)

  }

  undoPlayMana(): void {


    // const lastPlayed = this.state().lastPlayed
    // : 20
    // typeof this.state().lastPlayed === "number" ?
    const currentMana = this.state().availableMana.concat(this.state().tappedMana)
    const sacrificedMana = this.state().sacrificedMana

    const lastPlayedIsAvailable =
      this.state().lastPlayed < 20 &&
      !sacrificedMana.includes(this.state().lastPlayed) &&
      currentMana.includes(this.state().lastPlayed)

    if (lastPlayedIsAvailable) {
      this.state.update(currentValue => ({
        ...currentValue,
        unplayedMana: currentValue.unplayedMana.concat(this.state().lastPlayed),

        availableMana: currentValue.availableMana
          .filter(mana => mana !== currentValue.lastPlayed),

        tappedMana: currentValue.tappedMana.filter(mana => mana !== currentValue.lastPlayed),

        lastPlayed: 20,
        playedMana: false,
      }))


      // this.state().unplayedMana =
      //   this.state().lastPlayed < 20 ?
      //     this.state().unplayedMana.concat(this.state().lastPlayed)
      //     :
      //     this.state().unplayedMana;

      // this.state().availableMana = this.state().availableMana.length > 0 ?
      //   this.state().availableMana.filter(mana => mana !== this.state().lastPlayed)
      //   :
      //   this.state().availableMana;

      // this.state().tappedMana = this.state().tappedMana.length > 0 ?
      //   this.state().tappedMana.filter(mana => mana !== this.state().lastPlayed)
      //   :
      //   this.state().tappedMana;

      // this.state().lastPlayed = null;
      // this.state().playedMana = false;
    }

  }

  tapMana(manaSelection: number): void {
    this.state.update(currentValue => ({
      ...currentValue,
      availableMana: currentValue.availableMana.filter(mana => mana !== manaSelection),
      tappedMana: currentValue.tappedMana.concat(manaSelection)
    }))
    // this.state.availableMana = this.state.availableMana.filter(mana => mana !== manaSelection);
    // this.state.tappedMana = this.state.tappedMana.concat(manaSelection)
  }

  untapMana(): void {
    this.state.update(currentValue => ({
      ...currentValue,
      availableMana: currentValue.availableMana.concat(currentValue.tappedMana),
      tappedMana: [],
    }))
    // this.state.availableMana = this.state.availableMana.concat(this.state.tappedMana);
    // this.state.tappedMana = []
  }

  sacrificeMana(manaSelection: number): void {
    this.state.update(currentValue => ({
      ...currentValue,
      tappedMana: currentValue.tappedMana.filter(mana => mana !== manaSelection),
      sacrificedMana: currentValue.sacrificedMana.concat(manaSelection),
      lastSacrified: manaSelection,
    }))
    // this.state.tappedMana.filter(mana => mana !== manaSelection);
    // this.state.sacrificedMana = this.state.sacrificedMana.concat(manaSelection);
    // this.state.lastSacrified = manaSelection;
  }

  undoSacrificeMana(manaSelection?: number): void {
    this.state.update(currentValue => ({
      ...currentValue,
      tappedMana:
        typeof (manaSelection) === "number" && manaSelection < 20 ?
          currentValue.tappedMana.concat(manaSelection)
          :
          typeof (currentValue.lastSacrified) === "number" && currentValue.lastSacrified < 20 ?
            currentValue.tappedMana.concat(currentValue.lastSacrified)
            :
            currentValue.tappedMana,
      sacrificedMana:
        typeof (manaSelection) === "number" && manaSelection < 20 ?
          currentValue.sacrificedMana.filter(mana => mana !== manaSelection)
          :
          typeof (currentValue.lastSacrified) === "number" && currentValue.lastSacrified < 20 ?
            currentValue.sacrificedMana.filter(mana => mana !== currentValue.lastSacrified)
            :
            currentValue.sacrificedMana
    }))

    // this.state.tappedMana =
    //   typeof (manaSelection) === "number" ?
    //     this.state.tappedMana.concat(manaSelection)
    //     :
    //     typeof (this.state.lastSacrified) === "number" ?
    //       this.state.tappedMana.concat(this.state.lastSacrified)
    //       :
    //       this.state.tappedMana
    //   ;

    // this.state.sacrificedMana =
    //   typeof (manaSelection) === "number" ?
    //     this.state.sacrificedMana.filter(mana => mana !== manaSelection)
    //     :
    //     typeof (this.state.lastSacrified) === "number" ?
    //       this.state.sacrificedMana.filter(mana => mana !== this.state.lastSacrified)
    //       :
    //       this.state.sacrificedMana;

    // this.state.lastSacrified = null;

  }

  nextTurn(): void {
    this.state.update(currentValue => ({
      ...currentValue,
      availableMana: currentValue.availableMana.concat(currentValue.tappedMana),
      tappedMana: []
    }))
    // this.state.availableMana = this.state.availableMana.concat(this.state.tappedMana);
    // this.state.tappedMana = []
  }

  newGame(): void {
    this.state.set(defaultGameState)
  }
}
