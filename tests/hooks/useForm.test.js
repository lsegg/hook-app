import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe("useForm", () => {
  const initialForm = {
    name: "Jane Doe",
    email: "jane@doe.com",
  };
  const newName = "Joane";

  test("should return default values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      handleInputChange: expect.any(Function),
      handleReset: expect.any(Function),
    });
  });

  test("should change the form name", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;

    act(() => handleInputChange({ target: { name: "name", value: newName } }));

    expect(result.current.name).toBe(newName);
  });

  test("should reset the form name", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange, handleReset } = result.current;

    act(() => {
      handleInputChange({ target: { name: "name", value: newName } });
      handleReset();
    });

    expect(result.current.name).toBe(initialForm.name);
  });
});
