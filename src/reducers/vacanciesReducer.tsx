import { VacanciesAction, VacanciesActionTypes, VacanciesState } from "../components/types"

const initialState: VacanciesState = {
	vacancies: { items: [] },
	loading: false,
	error: null,
	filter: ['Полный день', 'Гибкий график', 'Удаленная работа']
}

export const vacanciesReducer = (state = initialState, action: VacanciesAction): VacanciesState => {

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
			return {
				...state,
				filter: action.payload
			}
		default:
			return state;
	}
}

