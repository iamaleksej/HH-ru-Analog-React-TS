import { Dispatch } from "redux";
import axios from "axios";
import { VacancyAction, VacancyActionTypes } from "../components/types";

export const fetchVacancies = () => {
	return async (dispatch: Dispatch<VacancyAction>) => {
		try {
			dispatch({ type: VacancyActionTypes.FETCH_VACANCIES })
			const response = await axios.get('https://api.hh.ru/vacancies')
			dispatch({ type: VacancyActionTypes.FETCH_VACANCIES_SUCCES, payload: response.data })
		} catch (e) {
			dispatch({
				type: VacancyActionTypes.FETCH_VACANCIES_ERROR,
				payload: 'Произошла ошибка при загрузке вакансий'
			})
		}
	}
}