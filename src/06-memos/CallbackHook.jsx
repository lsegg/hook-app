import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFunc = useCallback((passedValue) => {
    // passedValue = 5
    setCounter((notMemorizedCounter) => notMemorizedCounter + passedValue);
  }, []);

  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFunc} />
    </>
  );
};
