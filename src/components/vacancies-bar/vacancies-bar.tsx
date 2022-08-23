import React, { useEffect } from 'react';
import VacanciesItem from '../vacancies-item';
import Vacancy from '../vacancy';
import './vacancies-bar.sass';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchVacancies } from '../../actions/vacancies';
import { useDispatch } from 'react-redux';
// import { actionFilterSchedule } from '../../actions/filters';


const VacanciesBar: React.FC = () => {
	const { vacancies, loading, error, filter, params } = useTypedSelector(state => state.vacanciesData)
	const dispatch = useDispatch()
	// console.log('params = ' + params);

	useEffect(() => {
		dispatch(fetchVacancies(params))
	}, [])

	if (loading) {
		return <h1>Загурзка...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	const vacItems = vacancies.items;
	// console.log(filter)
	return (
		<div className="vacancies-bar">
			<div className="vacancies">
				{vacItems.map((vacanciesItem: any) =>
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