import { AppDispatch } from './../../redux/redux-store';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { TsConfigSourceFile } from "typescript";
import  ff from './all';

//export function f2():tp {
 // return {
  ///  name: "bbb",
  //};
//}
//let t = {...ff}

export const UseActionsM = () => {

  const dis = useDispatch();
  console.log("--->>>"+ff);
  return bindActionCreators( ff, dis);
};
export let f=()=>
{
let {f1}=UseActionsM();

}
