import { combineReducers } from "redux";
import { vacancyReducer } from "./vacancyReducer";

export const rootReducer = combineReducers({
	vacanciesData: vacancyReducer
})

export type RootState = ReturnType<typeof rootReducer>