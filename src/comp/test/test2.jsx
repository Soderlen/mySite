import React, { useState } from 'react';
import {useTypesSelector} from "../../hook/useTypesSelector";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Card, Row } from 'antd';
import  ReactDOM from 'react-dom'
const Test2 = ( {children}) => {
 let [c]=useState(document.createElement('div'))
document.body.appendChild(c)
    return   ReactDOM.createPortal(children,c)
  
   
};

export default Test2;