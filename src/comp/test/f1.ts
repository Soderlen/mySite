import { type } from 'os';
import React from 'react';
interface tp {
    type: "TOOGLE_ISFETCHING";
  }
  type tt=tp
 
  export function f1 ():tt {
    alert("f1");
    return { type:"TOOGLE_ISFETCHING"};
  }
  export function f2():tt{
    alert("f2");
    return{ type:"TOOGLE_ISFETCHING"}
  }
 
let t={

  get()
  {

  },
  st()
  {

  },
  gg:()=>{}
}
let tt={...t}
