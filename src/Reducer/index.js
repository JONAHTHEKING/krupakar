import { combineReducers } from "redux";
import filterreducer from "./filterreducer"

const reducer = combineReducers ({

    filterreducer : filterreducer
})
export default reducer