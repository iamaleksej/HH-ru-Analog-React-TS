import { Dispatch } from "redux";
import axios from "axios";
import { VacanciesAction, VacanciesActionTypes } from "../components/types";

export const fetchVacancies = (params: string) => {
	return async (dispatch: Dispatch<VacanciesAction>) => {
		try {
			dispatch({ type: VacanciesActionTypes.FETCH_VACANCIES })
			const response = await axios.get(`https://api.hh.ru/vacancies?${params}`)
			// console.log(response);

			dispatch({ type: VacanciesActionTypes.FETCH_VACANCIES_SUCCESS, payload: response.data })
		} catch (e) {
			dispatch({
				type: VacanciesActionTypes.FETCH_VACANCIES_ERROR,
				payload: 'Произошла ошибка при загрузке вакансий'
			})
		}
	}
}