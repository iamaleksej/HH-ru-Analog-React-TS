export interface VacancyState {
	vacancies: { items: IVacancy[] };
	loading: boolean;
	error: null | string
}

export interface IArea {
	name: string;
}
export interface IEmployer {
	name: string;
	logo_urls: { original: string; 90: string; 240: string; };
}
export interface IVacancy {
	id: number;
	name: string;
	area: IArea;
	employer: IEmployer;
	published_at: string;
}

export enum VacancyActionTypes {
	FETCH_VACANCIES = 'FETCH_VACANCIES',
	FETCH_VACANCIES_SUCCES = 'FETCH_VACANCIES_SUCCES',
	FETCH_VACANCIES_ERROR = 'FETCH_VACANCIES_ERROR',
}

interface FetchVacanciesAction {
	type: VacancyActionTypes.FETCH_VACANCIES;
}
interface FetchVacanciesSuccesAction {
	type: VacancyActionTypes.FETCH_VACANCIES_SUCCES;
	payload: { items: [] };
}
interface FetchVacanciesErrorAction {
	type: VacancyActionTypes.FETCH_VACANCIES_ERROR;
	payload: string;
}

export type VacancyAction = FetchVacanciesAction | FetchVacanciesSuccesAction | FetchVacanciesErrorAction;