import { describe, it, expect } from 'vitest';
import { getNextState } from '../modules/orders/order.state';
import { OrderState } from '../modules/orders/order.types';

describe('Order state flow', () => {
  it('should advance from CREATED to ANALYSIS', () => {
    const next = getNextState('CREATED');
    expect(next).toBe('ANALYSIS');
  });

  it('should advance from ANALYSIS to COMPLETED', () => {
    const next = getNextState('ANALYSIS');
    expect(next).toBe('COMPLETED');
  });

  it('should not allow advancing from COMPLETED', () => {
    expect(() => getNextState('COMPLETED')).toThrow();
  });
});
