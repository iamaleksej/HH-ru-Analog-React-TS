import { VacanciesAction, VacanciesActionTypes, VacanciesState } from "../components/types"

const initialState: VacanciesState = {
	vacancies: { items: [] },
	loading: false,
	error: null
}

export const vacanciesReducer = (state = initialState, action: VacanciesAction): VacanciesState => {

	switch (action.type) {
		case VacanciesActionTypes.FETCH_VACANCIES:
			return {
				vacancies: { items: [] },
				loading: true,
				error: null
			}
		case VacanciesActionTypes.FETCH_VACANCIES_SUCCESS:
			return {
				vacancies: action.payload,
				loading: false,
				error: null
			}
		case VacanciesActionTypes.FETCH_VACANCIES_ERROR:
			return {
				vacancies: { items: [] },
				loading: false,
				error: action.payload
			}
		default:
			return state;
	}
}

