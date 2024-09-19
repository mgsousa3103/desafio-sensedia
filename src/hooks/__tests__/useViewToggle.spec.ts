/* 
  1. Deve inicializar com "isCardView" como false
  2. Deve mudar "isCardView" para true quando toggleView for chamado
*/
import { act, renderHook } from '@testing-library/react';
import useViewToggle from '../useViewToggle';

describe('useViewToggle Hook', () => {
  it('should initialize with "isCardView" as false', () => {
    const { result } = renderHook(() => useViewToggle());

    expect(result.current.isCardView).toBe(false);
  });

  it('should change "isCardView" to true when toggleView is called', () => {
    const { result } = renderHook(() => useViewToggle());

    expect(result.current.isCardView).toBe(false);

    act(() => {
      result.current.toggleView();
    });

    expect(result.current.isCardView).toBe(true);

    act(() => {
      result.current.toggleView();
    });

    expect(result.current.isCardView).toBe(false);
  });
});
