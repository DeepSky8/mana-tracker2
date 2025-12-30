import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaPackType } from './mana-pack-type';

describe('ManaPackType', () => {
  let component: ManaPackType;
  let fixture: ComponentFixture<ManaPackType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManaPackType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManaPackType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
