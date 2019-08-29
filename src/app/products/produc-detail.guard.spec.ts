import { TestBed, async, inject } from '@angular/core/testing';

import { ProducDetailGuard } from './produc-detail.guard';

describe('ProducDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProducDetailGuard]
    });
  });

  it('should ...', inject([ProducDetailGuard], (guard: ProducDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
