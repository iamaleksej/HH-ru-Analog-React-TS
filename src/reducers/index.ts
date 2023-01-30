import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { vacanciesReducer } from "./vacanciesReducer";
import { vacancyReducer } from "./vacancyReducer";

export const rootReducer = combineReducers({

	vacanciesData: vacanciesReducer,
	vacancyData: vacancyReducer,
	favoritesData: favoritesReducer
})

export type RootState = ReturnType<typeof rootReducer>