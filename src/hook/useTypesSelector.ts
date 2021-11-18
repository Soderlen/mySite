import React from 'react';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
export const useTypesSelector:TypedUseSelectorHook<AppStateType>=useSelector;