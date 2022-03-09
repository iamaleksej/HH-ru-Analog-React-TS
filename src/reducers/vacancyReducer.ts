import { VacancyAction, VacancyActionTypes, VacancyState } from "../components/types"

const initialState: VacancyState = {
	vacancies: { items: [] },
	loading: false,
	error: null
}

export const vacancyReducer = (state = initialState, action: VacancyAction): VacancyState => {

	switch (action.type) {
		case VacancyActionTypes.FETCH_VACANCIES:
			return {
				vacancies: { items: [] },
				loading: true,
				error: null
			}
		case VacancyActionTypes.FETCH_VACANCIES_SUCCES:
			return {
				vacancies: action.payload,
				loading: false,
				error: null
			}
		case VacancyActionTypes.FETCH_VACANCIES_ERROR:
			return {
				vacancies: { items: [] },
				loading: false,
				error: action.payload
			}
		default:
			return state;
	}
}

