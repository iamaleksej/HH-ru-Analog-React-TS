import { VacanciesActionTypes } from "../components/types";

const actionFilterSchedule = (filterName: string, filterData: string[]) => {
	return {
		type: VacanciesActionTypes.VACANCIES_FILTERED,
		payload: {
			filterName,
			filterData
		}
	}
}

export { actionFilterSchedule }