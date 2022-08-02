import { VacanciesActionTypes } from "../components/types";

const actionFilterSchedule = (scheduleFilter: string) => {
   return {
      type: VacanciesActionTypes.VACANCIES_FILTERED,
      payload: scheduleFilter
   }
}

export { actionFilterSchedule }