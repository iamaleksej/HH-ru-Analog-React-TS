import React, { useEffect } from 'react';
import VacanciesItem from '../vacancies-item';
import Vacancy from '../vacancy';
import './vacancies-bar.sass';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchVacancies } from '../../actions/vacancies';
import { useDispatch } from 'react-redux';



const VacanciesBar: React.FC = () => {
	const { vacancies, loading, error } = useTypedSelector(state => state.vacanciesData)
	const dispatch = useDispatch()
	console.log(vacancies)
	useEffect(() => {
		dispatch(fetchVacancies())
	}, [])

	if (loading) {
		return <h1>Загурзка...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}
	const vacItems = vacancies.items;
	return (
		<div className="vacancies-bar">

			<div className="vacancies">
				{vacItems.map(vacancy =>
					<VacanciesItem key={vacancy.id} vacancy={vacancy} />
				)}
			</div>
			<Vacancy />
		</div >
	)
}


export default VacanciesBar;