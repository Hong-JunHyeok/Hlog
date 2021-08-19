import { Dispatch, SetStateAction, useCallback, useState } from "react";

type ReturnType<T> = [T, () => void, Dispatch<SetStateAction<T>>];

const useToggle = (initialState: boolean): ReturnType<boolean> => {
  const [toggleState, setToggleState] = useState<boolean>(initialState);

  const onChangeToggleState = useCallback(() => {
    setToggleState((prev) => !prev);
  }, [toggleState]);

  return [toggleState, onChangeToggleState, setToggleState];
};

export default useToggle;
