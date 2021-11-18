import { useCallback, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
export const useFun = (py, call) => {
  let [i, setI] = useState(0);
  let ref = useRef(0);
  let ttt = useHistory();
  ttt.push("/login");
  console.log("function is created");

  const fun = useCallback(
    (...args) => {
      //(...args) => {

      setI(i + 1);
      call(...args);
      ref.current = ref.current + 1;
      console.log("huk----" + i);
    },
    [call]
  );

  return [i, fun];
};
