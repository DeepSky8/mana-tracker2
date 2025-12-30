import { Component, input } from '@angular/core';
import { defaultGameState, IGameState } from '../../data/library';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  state = input<IGameState>(defaultGameState)

}
