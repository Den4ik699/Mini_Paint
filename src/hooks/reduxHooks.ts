import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../reducers";


export const usedTypedSelector: TypedUseSelectorHook<RootState> = useSelector