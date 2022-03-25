import React, { useEffect, useState } from 'react';
import VacanciesItem from '../vacancies-item';
import Vacancy from '../vacancy';
import './vacancies-bar.sass';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchVacancies } from '../../actions/vacancies';
import { useDispatch } from 'react-redux';
// import { EventProps } from '../types';

// type EventProps = {
// 	onClick: () => void
// }

interface IVacancyState {
	selectedVacancy: number;
}

const VacanciesBar: React.FC = () => {
	const { vacancies, loading, error } = useTypedSelector(state => state.vacanciesData)
	const dispatch = useDispatch()
	const [selectedVacancy, setSelectVacancy] = useState<IVacancyState>();


	console.log(vacancies)
	useEffect(() => {
		dispatch(fetchVacancies())

	}, [])

	const onVacancySelected = (id: any) => {
		setSelectVacancy(id)
		console.log(id);
	}


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
					<VacanciesItem key={vacancy.id}
						vacancy={vacancy}
						id={vacancy.id}
						onVacancySelected={onVacancySelected}
					/>
				)}
			</div>
			<Vacancy vacancyId={selectedVacancy} />
		</div >
	)
}


export default VacanciesBar;