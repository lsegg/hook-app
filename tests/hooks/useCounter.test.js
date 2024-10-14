import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";

describe("useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(0);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should return counter equal to 100", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test("should increment the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;
    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(3);
  });

  test("should decrement the counter", () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(7);
  });

  test("should reset the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { increment, decrement, reset } = result.current;
    act(() => {
      increment(20);
      decrement(2);
      reset();
    });

    expect(result.current.counter).toBe(0);
  });
});
