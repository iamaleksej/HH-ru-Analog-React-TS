import { VacanciesAction, VacanciesActionTypes, VacanciesState } from "../components/types"

const initialState: VacanciesState = {
	vacancies: { items: [] },
	loading: false,
	error: null,
	filter: {}
}
export const vacanciesReducer = (state = initialState, action: VacanciesAction): VacanciesState => {
	console.log(state.filter)
	switch (action.type) {
		case VacanciesActionTypes.FETCH_VACANCIES:
			return {
				...state,
				loading: true
			}
		case VacanciesActionTypes.FETCH_VACANCIES_SUCCESS:
			return {
				...state,
				loading: false,
				vacancies: action.payload
			}
		case VacanciesActionTypes.FETCH_VACANCIES_ERROR:
			return {
				...state,
				error: action.payload
			}
		case VacanciesActionTypes.VACANCIES_FILTERED:
			console.log(action.payload)
			return {
				...state,
				filter: {
					...state.filter,
					[action.payload.filterName]: action.payload.filterData
				}
			}
		default:
			return state;
	}
}

