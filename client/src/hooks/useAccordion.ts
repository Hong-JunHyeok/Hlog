import produce from "immer";
import { useCallback, useState } from "react";

export type ReturnTypes<T = any[]> = [T, (toggleIndex: number) => void];

const useAccordion = (AccordionsLength: number): ReturnTypes => {
  const [toggleSwitchList, setToggleSwitchList] = useState<Array<boolean>>(
    new Array(AccordionsLength).fill(false),
  );

  const resetToggleList = () => {
    let copyToggleSwitchList = [...toggleSwitchList];

    copyToggleSwitchList = copyToggleSwitchList.map(() => false);

    setToggleSwitchList(copyToggleSwitchList);
  };

  const switchByIndex = useCallback(
    (toggleIndex: number) => {
      resetToggleList();

      setToggleSwitchList((prevToggleList) =>
        produce(prevToggleList, (draft) => {
          draft[toggleIndex] = true;
          //   draprevToggleList[toggleIndex] = true;
        }),
      );
    },
    [toggleSwitchList, setToggleSwitchList],
  );

  return [toggleSwitchList, switchByIndex];
};

export default useAccordion;
