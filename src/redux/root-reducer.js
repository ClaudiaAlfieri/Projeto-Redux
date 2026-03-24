import { combineReducers } from "redux";
import { userSlicer } from "./user/slice";

export default combineReducers({
    user: userSlice,
})