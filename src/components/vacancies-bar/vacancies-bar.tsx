import React, { useEffect } from 'react';
import VacanciesItem from '../vacancies-item';
import Vacancy from '../vacancy';
import './vacancies-bar.sass';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchVacancies } from '../../actions/vacancies';
import { useDispatch } from 'react-redux';
import { FavoritesState, IVacancy, VacanciesState } from '../types';
// import { actionFilterSchedule } from '../../actions/filters';


const VacanciesBar = ({ vacancies }: IVacancy[] | [] | any, { loading, error, filter, params }: VacanciesState) => {
	// const { vacancies, loading, error, filter, params } = vacanciesData;
	// const { favorites, loading, error } = favoritesData;
	console.log(loading);

	// console.log(favorites);

	const dispatch = useDispatch()
	// console.log('params = ' + params);

	useEffect(() => {
		dispatch(fetchVacancies(params))
	}, [])

	if (loading) {
		return <h1>Загрузка...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	// console.log(filter)
	return (
		<div className="vacancies-bar">
			<div className="vacancies">
				{vacancies.map((vacanciesItem: any) =>
					<VacanciesItem
						key={vacanciesItem.id}
						vacanciesItem={vacanciesItem}
						filter={filter} />
				)}
			</div>
			<Vacancy />
		</div >
	)
}


export default VacanciesBar;