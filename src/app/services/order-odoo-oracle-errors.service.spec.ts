import { TestBed } from '@angular/core/testing';

import { OrderOdooOracleErrorsService } from './order-odoo-oracle-errors.service';

describe('OrderOdooOracleErrorsService', () => {
  let service: OrderOdooOracleErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderOdooOracleErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
