import { VacanciesActionTypes } from "../components/types";

const actionParams = (params: string) => {
   return {
      type: VacanciesActionTypes.VACANCIES_PARAMS,
      payload: params
   }
}

export { actionParams }