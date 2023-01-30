import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import SearchBar from '../search-bar';
import VacanciesBar from '../vacancies-bar';

const HomePage: React.FC = () => {
	const { vacancies, loading, error, filter, params } = useTypedSelector(state => state.vacanciesData);
	// console.log(vacancies.items);


	return (
		<>
			<SearchBar />
			<VacanciesBar
				vacancies={vacancies.items}
				loading={loading}
				error={error}
				filter={filter}
				params={params}
			/>
		</>
	)
}

export default HomePage;
