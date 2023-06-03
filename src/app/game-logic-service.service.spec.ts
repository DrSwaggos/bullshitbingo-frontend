import { TestBed } from '@angular/core/testing';

import { GameLogicServiceService } from './game-logic-service.service';

describe('GameLogicServiceService', () => {
  let service: GameLogicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameLogicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
