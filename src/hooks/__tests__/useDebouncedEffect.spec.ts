import { renderHook } from '@testing-library/react';
import useDebouncedEffect from '../useDebouncedEffect';

describe('useDebouncedEffect Hook', () => {
  vi.useFakeTimers();

  it('should call the effect after the delay', () => {
    const effect = vi.fn();

    renderHook(() => useDebouncedEffect(effect, [], 500));
    expect(effect).not.toHaveBeenCalled();

    vi.advanceTimersByTime(500);
    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('should not call the effect after the delay', () => {
    const effect = vi.fn();
    renderHook(() => useDebouncedEffect(effect, [], 500));

    vi.advanceTimersByTime(250);

    expect(effect).not.toHaveBeenCalled();
  });
});
