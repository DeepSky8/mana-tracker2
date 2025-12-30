import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameState } from './game-state';

describe('GameState', () => {
  let component: GameState;
  let fixture: ComponentFixture<GameState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameState]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameState);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
