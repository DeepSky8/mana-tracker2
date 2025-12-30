import { Component, EventEmitter, Output } from '@angular/core';
import { pack } from '../../data/library';

@Component({
  selector: 'app-mana-pack-type',
  imports: [],
  templateUrl: './mana-pack-type.html',
  styleUrls: ['../../../styles/styles.scss', './mana-pack-type.scss'],
})
export class ManaPackType {
  @Output() selectedPack = new EventEmitter<number[]>();
  pack = pack

  public selectManaPack(packSelected: number[]): void {
    this.selectedPack.emit(packSelected);
  }
}
